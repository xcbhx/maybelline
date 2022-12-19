import './MakeupListItem.css';

export default function MakeupListItem({ makeup, handleAddToOrder }) {
  return (
    <div className="MakeupListItem">
      <div className="name">{makeup.name}</div>
      <div className="buy">
        <span>${makeup.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(makeup._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}