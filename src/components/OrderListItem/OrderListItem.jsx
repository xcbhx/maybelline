import './OrderListItem.css';

export default function OrderListItem({ order, activeOrder, setActiveOrder }) {
  return (
    <div className="section-heading-Order">
      <div
        className={`OrderListItem ${order === activeOrder ? 'selected' : ''}`}
        onClick={() => setActiveOrder(order)}
      >

        <div className="orderId">
          <div>Order: {order.orderId}</div>
          <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
          <div>${order.orderTotal.toFixed(2)}</div>
          <div className="smallerM">{order.orderQty} Makeup{order.orderQty > 1 ? 's' : ''}</div>
        </div>
      </div>
    </div>
  );
}