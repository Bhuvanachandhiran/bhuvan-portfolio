import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('theme') !== 'light';
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="text-2xl" aria-label="Toggle dark mode">
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
