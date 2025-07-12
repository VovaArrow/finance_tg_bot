export default function Navigation({ page, setPage, hidden }) {
  if (hidden) return null;

  return (
    <div className="bottom-0 left-0 w-full max-w-md mx-auto pb-8 pt-2 bg-white dark:bg-gray-800 border-t border-sky-500 dark:border-sky-500 flex justify-around">
      <button
        onClick={() => setPage("home")}
        className={`text-m font-bold ${page === "home" ? "text-sky-500" : ""}`}
      >
        Главная
      </button>
       <button
        onClick={() => setPage("cancel")}
        className={`text-m font-bold ${page === "cancel" ? "text-sky-500" : ""}`}
      >
        Отменить расход
      </button>
      <button
        onClick={() => setPage("ai-chat")}
        className={`text-m font-bold ${page === "ai-chat" ? "text-sky-500" : ""}`}
      >
        ИИ Чат
      </button>
     
    </div>
  );
}