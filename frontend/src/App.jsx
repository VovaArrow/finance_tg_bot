import { useState } from "react";
import Home from "./pages/Home";
import Cancel from "./pages/Cancel";
import Navigation from "./components/Navigation";
import AiChat from "./pages/AiChat";

export default function App() {
  const [page, setPage] = useState("home");
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  return (
    <div className="min-h-screen max-w-md mx-auto bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      {page === "home" && <Home />}
      {page === "cancel" && <Cancel />}
      {page === "ai-chat" && <AiChat />}

      <div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto">
        <Navigation page={page} setPage={setPage} hidden={keyboardOpen} />
      </div>
    </div>
  );
}