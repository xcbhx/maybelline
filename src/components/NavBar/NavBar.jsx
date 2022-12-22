import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav>
        <div className="welcome">Welcome, {user.name}</div>
        &nbsp;  &nbsp;
        <div className="Link">
          <Link to="">Home</Link>
          &nbsp;  &nbsp;
          <Link to="/cart">🛍</Link>
          &nbsp;  &nbsp;
          <Link to="/orders">Orders</Link>
          &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      </nav>
      <footer>© Ceina Ellison, Inc. 2022</footer>
    </>
  );
}