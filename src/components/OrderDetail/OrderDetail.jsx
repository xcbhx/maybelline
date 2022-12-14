import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(makeup =>
    <LineItem
      lineItem={makeup}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={makeup._id}
    />
  );

  return (
    <div className="ContainerCart">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER &nbsp;&nbsp;</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="total">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="placeOrder">Ready To Place Order?</div>
        }
      </div>
    </div>
  );
}