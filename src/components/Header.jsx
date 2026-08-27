import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="items-center py-4 bg-gray-900 shadow">
      <div className="flex justify-between container mx-auto px-5">
        <div className="font-bold text-xl">Where in the world?</div>
        <div className="flex items-center gap-2">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216" fill={theme == 'light' ? "none" : "white"} stroke={theme == 'light' ? "currentColor" : "white"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" /></svg>
          <div className="font-semibold" onClick={() => toggleTheme()}>Dark Mode</div>
        </div>
      </div>
    </div>
  );
}
