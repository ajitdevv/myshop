import { useEffect, useState } from "react";
function ThemeToggleButton() {
  const [Theme, setTheme] = useState(localStorage.getItem("Theme") === "dark");

  useEffect(() => {
    if (Theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("Theme", "light");
    }
  });
  const themeToggle = () => {
    setTheme(!Theme);
  };
  return (
    <div>
      <button onClick={themeToggle} className="mt-6">
        {Theme ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
export default ThemeToggleButton;
