import React, { useEffect } from 'react';
import './styles/tailwind.css';

import Routes from './routes';

function App() {
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add('dark');
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 h-screen overflow-y-auto text-gray-50">
      <Routes />
    </div>
  );
}

export default App;
