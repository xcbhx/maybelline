import './MakeupList.css';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupList, handleAddToOrder }) {
  const makeups = makeupList && makeupList.map(makeup =>
    <MakeupListItem
      key={makeup._id}
      makeupList={makeup}
      handleAddToOrder={handleAddToOrder}
    />

  );
  return (
    <>
      <main className="MakeupList">
        {makeups}
      </main>
      {/* {makeup.map((data) => {
        return (
          <li key={data.id}>{data.name}</li>
        )
      })} */}
    </>
  );
}