import { useContext } from 'react';
import UserContext from '../components/UserContext';

const UserInfo = () => {
  const { user, signOut } = useContext(UserContext);

  if (!user) {
    return false;
  }

  return (
    <div className="user-info">
      <p>
        Hello, <strong>{user}</strong>
      </p>
      <p>Welcome to our app</p>
      <button className="btn" onClick={signOut}>
        Sign Out
      </button>

      <style jsx>{`
        .user-info {
          padding: 20px;
          text-align: center;
        }
        .btn {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default UserInfo;
