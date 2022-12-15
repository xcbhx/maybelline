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
      <Link to="/">Face</Link>
      &nbsp; | &nbsp;
      <Link to="/">Eyes</Link>
      &nbsp; | &nbsp;
      <Link to="/">Lips</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}