import { useState } from "react";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import Navigation from "./components/Navigation";

export default function App() {
  const [page, setPage] = useState("home");
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  return (
    <div className="min-h-screen max-w-md mx-auto bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      {page === "home" && <Home />}
      {page === "add" && <AddExpense />}

      <Navigation page={page} setPage={setPage} hidden={keyboardOpen} />
    </div>
  );
}