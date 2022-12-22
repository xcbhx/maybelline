import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      <div className="makeupImg"><img src={`${lineItem.makeup.api_featured_image}`} alt="product"></img></div>
      <div className="makeupName">
        {lineItem.makeup.name}
      </div>
      <div className="makeupPrice">
        {lineItem.makeup.price.toFixed(2)}
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.makeup._id, lineItem.qty - 1)}
          >−</button>
        }
        <span>({lineItem.qty})&nbsp;</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.makeup._id, lineItem.qty + 1)}
          >+</button>
        }
        ${lineItem.extPrice.toFixed(2)}
      </div>
    </div>
  );
}