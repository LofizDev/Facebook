import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    //   localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
    //   localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(true);
  };
  
  const handleLightMode = () => {
    setDarkMode(false);
  };

  return [darkMode, handleDarkMode,handleLightMode];
}