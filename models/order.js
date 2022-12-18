const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const makeupSchema = require('./makeupSchema');

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    makeup: makeupSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function () {
    // 'this' keyword is bound to the lineItem document
    return this.qty * this.makeup.price;
});

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, makeup) => total + makeup.extPrice, 0);
});

orderSchema.virtual('orderQty').get(function () {
    return this.lineItems.reduce((total, makeup) => total + makeup.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
        // query object
        { user: userId, isPaid: false },
        // update doc - provides values when inserting
        { user: userId },
        // upsert option
        { upsert: true, new: true }
    );
};

// Instance method for adding an makeup to a cart (unpaid order)
orderSchema.methods.addMakeupToCart = async function (makeupId) {
    // 'this' keyword is bound to the cart (order doc)
    const cart = this;
    // Check if the item already exists in the cart
    const lineItem = cart.lineItems.find(lineItem => lineItem.makeup._id.equals(makeupId));
    if (lineItem) {
        // It already exists, so increase the qty
        lineItem.qty += 1;
    } else {
        // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
        const Makeup = mongoose.model('Makeup');
        const makeup = await Makeup.findById(makeupId);
        // The qty of the new lineItem object being pushed in defaults to 1
        cart.lineItems.push({ makeup });
    }
    // return the save() method's promise
    return cart.save();
};

// Instance method to set an item's qty in the cart
orderSchema.methods.setItemQty = function (makeupId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // Find the line item in the cart for the menu item
    const lineItem = cart.lineItems.find(lineItem => lineItem.makeup._id.equals(makeupId));
    if (lineItem && newQty <= 0) {
        // Calling remove, removes itself from the cart.lineItems array
        lineItem.remove();
    } else if (lineItem) {
        // Set the new qty - positive value is assured thanks to prev if
        lineItem.qty = newQty;
    }
    // return the save() method's promise
    return cart.save();
};



module.exports = mongoose.model('Order', orderSchema);