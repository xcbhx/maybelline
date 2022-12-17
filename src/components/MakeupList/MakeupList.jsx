import './MakeupList.css';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupList, handleAddToOrder }) {
  const makeup = makeupList && makeupList.map(makeup =>
    <MakeupListItem
      key={makeup._id}
      makeupList={makeup}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MakeupList">
      {makeup}
    </main>
  );
}