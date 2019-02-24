import { useState, useContext } from 'react';
import UserContext from '../components/UserContext';

const Form = () => {
  const { signIn } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const authenticate = e => {
    e.preventDefault();
    if (username != '' || password != '') {
      signIn(username, password);
    } else {
      setMessage('Please enter your username and password');
    }
  };

  return (
    <form className="sign-in">
      <input type="text" name="username" placeholder="username" onChange={e => setUsername(e.target.value)} />
      <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      {message != '' && <div className="message">{message}</div>}
      <button className="btn" onClick={e => authenticate(e)}>
        Sign In
      </button>

      <style jsx>{`
        .sign-in {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          padding: 40px;
          margin: 0 auto;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08), 0 3px 3px 0 rgba(0, 0, 0, 0.12);
        }
        input {
          font-size: 18px;
          line-height: 1.8;
          padding: 8px 16px;
          display: block;
          width: 100%;
          min-width: 260px;
          background: #f3f3f3;
          border: 1px solid #eee;
          margin-bottom: 20px;
        }
        .message {
          color: red;
          font-size: 16px;
          max-width: 260px;
          text-align: center;
        }
        .btn {
          margin-top: 40px;
        }
      `}</style>
    </form>
  );
};

export default Form;
