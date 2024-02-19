import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import SignInForm from './components/SignIn/sign-in';
import SignUpForm from './components/SignUp/sign-up';
import Footer from './components/Shared/Footer';
import Homepage from './components/Homepage/Homepage';

function App() {
  const [currentPage, setCurrentPage] = useState('homepage');

  // Function to switch between pages
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Render the current page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case 'homepage':
        return <Homepage navigateTo={navigateTo} />;
      case 'signin':
        return <SignInForm />;
      case 'signup':
        return <SignUpForm />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
     
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
