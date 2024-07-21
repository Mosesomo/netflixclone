import { useAuth } from '../Components/AuthContext';

const Account = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Account Page</h1>
      <p>Welcome, {user?.email}!</p>
    </div>
  );
};

export default Account;
