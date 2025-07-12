import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Card({ label, emoji, amount, isExpanded, onClick, onUpdated }) {
  const [inputValue, setInputValue] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isExpanded) setInputValue(""); // сброс при закрытии
  }, [isExpanded]);

  const handleSubmit = (e) => {
    e.stopPropagation();
    if (!inputValue.trim() || Number(inputValue) === 0) return;

    axios
      .post("http://127.0.0.1:8000/pay", {
        category: label,
        amount: Number(inputValue),
      })
      .then((res) => {
        onUpdated();
        alert("Трата внесена!");
        console.log(`Внесено: ${inputValue} ₽ в категорию "${label}"`);
        setInputValue(""); // сбрасываем поле здесь
      })
      .catch((err) => {
        alert("Ошибка!");
        console.error("Error: ", err);
      });
  };

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

      {/* Контейнер с анимацией раскрытия */}
      <div
        ref={contentRef}
        className={`
          overflow-hidden transition-all duration-500 ease-in-out w-full
          ${isExpanded ? "max-h-96 mt-4" : "max-h-0"}
        `}
      >
        <div className="text-sm text-white text-center px-2">
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
            onClick={handleSubmit}
          >
            Внести
          </button>
        </div>
      </div>
    </div>
  );
}