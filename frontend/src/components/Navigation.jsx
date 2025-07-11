export default function Navigation({ page, setPage, hidden }) {
  if (hidden) return null;

  return (
    <div className="bottom-0 left-0 w-full max-w-md mx-auto p-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-around">
      <button
        onClick={() => setPage("home")}
        className={`text-sm ${page === "home" ? "font-bold text-blue-600" : ""}`}
      >
        Главная
      </button>
      <button
        onClick={() => setPage("ai-chat")}
        className={`text-sm ${page === "ai-chat" ? "font-bold text-blue-600" : ""}`}
      >
        ИИ Чат
      </button>
      <button
        onClick={() => setPage("add")}
        className={`text-sm ${page === "add" ? "font-bold text-blue-600" : ""}`}
      >
        Отменить расход
      </button>
    </div>
  );
}