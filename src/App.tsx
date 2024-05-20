import React from 'react';
import Routes from './routes';
import "./styles/globalStyles.css";
import SessionContextProvider from './stores/SessionContext';

function App() {
  return (
    <SessionContextProvider>
        <Routes />
    </SessionContextProvider>
  );
}

export default App;
