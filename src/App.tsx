import React, { useEffect } from 'react';
import './styles/tailwind.css';

import SearchProvider from './context/Search';
import Routes from './routes';

function App() {
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add('dark');
  }, []);

  return (
    <SearchProvider>
      <div className="bg-white dark:bg-gray-900 h-screen overflow-y-auto text-gray-50 font-body">
        <Routes />
      </div>
    </SearchProvider>
  );
}

export default App;
