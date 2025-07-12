import { useState } from "react";

export default function Card({ label, emoji, amount, isExpanded, onClick }) {
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div
      className={`
        p-4 dark:bg-gray-700 rounded-xl shadow 
        flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out cursor-pointer
      `}
      onClick={onClick}
    >
      <div className="text-2xl font-bold">{amount} ₽</div>
      <div className="text-base font-bold text-gray-200 mt-1">
        {emoji} {label} {emoji}
      </div>

      {isExpanded && (
        <div className="mt-2 text-sm text-white text-center px-2 w-full">
          <div className="p-2">Внести расход</div>

          <input
            type="number"
            placeholder="Сумма"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="w-full mb-3 p-2 rounded border"
          />

          <button
            type="button"
            className="w-full p-2 bg-blue-600 text-white rounded-xl"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Внесено:", inputValue);
            }}
          >
            Внести
          </button>
        </div>
      )}
    </div>
  );
}