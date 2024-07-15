import { Link } from 'react-router-dom';
import { IUser } from '../interfaces/IUser';
import { logout } from '../lib/auth';

type NavBarProps = {
  user: IUser | null;
  onLogout: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onLogout, user }) => {
  const handleLogout = () => {
    logout();
    onLogout();
  };
  let loggedIn = false;

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/"> Home </Link>
      </div>
      {loggedIn ? (
        <div className="navbar-end">
          <span className="navbar-item has-text-grey">
            {user.email}
          </span>
          <Link className="navbar-item" to="/jobs/new">
            Post Job
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-item" onClick={handleLogout}> Logout </a>
        </div>
      ) : (
        <div className="navbar-end">
          <Link className="navbar-item" to="/login"> Login </Link>
        </div>
      )}
    </nav>
  );
};
