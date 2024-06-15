import { useEffect, useState } from "react";

function Theme() {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    if (isDark) {
      setTimeout('document.documentElement.className = "light"', 500);
    } else {
      setTimeout('document.documentElement.className = "dark"', 500);
    }

    console.log(document.documentElement.className);
  }, [isDark]);

  const onTheme = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <span
      onClick={onTheme}
      className="material-symbols-outlined text-3xl md:text-4xl text-emerald-600"
    >
      {isDark ? "dark_mode" : "light_mode"}
    </span>
  );
}

export default Theme;
