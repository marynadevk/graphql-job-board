// import { ApolloProvider } from '@apollo/client';
// import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { CompanyPage } from './pages/CompanyPage';
import { CreateJobPage } from './pages/CreateJobPage';
import { HomePage } from './pages/HomePage';
import { JobPage } from './pages/JobPage';
import { LoginPage } from './pages/LoginPage';

export const App = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState(getUser);

  const handleLogin = () => { //to add user in parameter
    // setUser(user);
    navigate('/');
  };

  const handleLogout = () => {
    // setUser(null);
    navigate('/');
  };

  return (
    // <ApolloProvider client={}>
    <>
      <NavBar user={user} onLogout={handleLogout} />
      <main className="section">
        <Routes>
          <Route index path="/"
            element={<HomePage />}
          />
          <Route path="/companies/:companyId"
            element={<CompanyPage />}
          />
          <Route path="/jobs/new"
            element={<CreateJobPage />}
          />
          <Route path="/jobs/:jobId"
            element={<JobPage />}
          />
          <Route path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
        </Routes>
      </main>
      </>
    // </ApolloProvider>
  );
}
