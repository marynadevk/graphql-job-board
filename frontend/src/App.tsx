import { ApolloProvider } from '@apollo/client';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { CompanyPage } from './pages/CompanyPage';
import { CreateJobPage } from './pages/CreateJobPage';
import { HomePage } from './pages/HomePage';
import { JobPage } from './pages/JobPage';
import { LoginPage } from './pages/LoginPage';
import { getUser } from './lib/auth';
import { IUser } from './interfaces/IUser';
import { useState } from 'react';
import { apolloClient } from './lib/graphql/queries';

export const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser);

  const handleLogin = (user: IUser) => {
    setUser(user);
    navigate('/');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <ApolloProvider client={apolloClient}>
      <NavBar onLogout={handleLogout} user={user} />
      <main className="section">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/companies/:companyId" element={<CompanyPage />} />
          <Route path="/jobs/new" element={<CreateJobPage />} />
          <Route path="/jobs/:jobId" element={<JobPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </main>
    </ApolloProvider>
  );
};
