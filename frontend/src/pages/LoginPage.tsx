import { FormEventHandler, useState } from 'react';

type LoginPageProps = {
  onLogin: () => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(false);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">
          Email
        </label>
        <div className="control">
          <input className="input" type="email" required value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">
          Password
        </label>
        <div className="control">
          <input className="input" type="password" required value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      {false && (                             //to add error message
        <div className="message is-danger">
          <p className="message-body">
            Login failed
          </p>
        </div>
      )}
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
