import './MakeupList.css';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ listMakeup, handleAddToOrder }) {
  const makeups = listMakeup.map(makeup =>
    <MakeupListItem
      key={makeup._id}
      makeup={makeup}
      handleAddToOrder={handleAddToOrder}
    />

  );
  return (
    <>
      <main className="MakeupList">
        {makeups}
      </main>
    </>
  );
}