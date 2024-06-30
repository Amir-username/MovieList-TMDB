import { useEffect, useState } from "react";

function Theme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      return true;
    } else {
      return false;
    }
  });



  useEffect(() => {
    if (isDark) {
      setTimeout('document.documentElement.className = "light"', 500);
      localStorage.setItem("theme", "light");
    } else {
      setTimeout('document.documentElement.className = "dark"', 500);
      localStorage.setItem("theme", "dark");
    }
  }, [isDark]);

  const onTheme = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <span
      onClick={onTheme}
      className="material-symbols-outlined text-3xl md:text-4xl
       text-primary-light dark:text-primary-dark cursor-pointer"
    >
      {isDark ? "dark_mode" : "light_mode"}
    </span>
  );
}

export default Theme;
