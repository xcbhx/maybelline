import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuList, handleAddToOrder }) {
  const makeup = menuList && menuList.map(makeup =>
    <MenuListItem
      key={makeup._id}
      menuList={makeup}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {makeup}
    </main>
  );
}