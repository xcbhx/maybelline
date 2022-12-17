import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <h1 className="maybellineNav">MAYBELLINE</h1>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/">Cart</Link>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}