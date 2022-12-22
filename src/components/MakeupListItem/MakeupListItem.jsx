export default function MakeupListItem({ makeup, handleAddToOrder }) {
  return (
    <div className="productContainer">
      <div className="product">
        <img className="productImg" src={`${makeup.api_featured_image}`} alt="product" />
        <div className="productName">{makeup.name}</div>
        <div className="productPrice">${makeup.price.toFixed(2)}</div>
        <div className="pD">Description: {makeup.description}</div>
        <button className="btn-sm" onClick={() => handleAddToOrder(makeup._id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}