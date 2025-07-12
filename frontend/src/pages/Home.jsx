import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const CATEGORIES = [
  { id: 1, label: "Продукты", emoji: "🥗" },
  { id: 2, label: "Настя", emoji: "💝" },
  { id: 3, label: "Резерв", emoji: "💰" },
];

export default function Home() {
  const [data, setData] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/state")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleCard = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  if (!data) return <div>Загрузка...</div>;

  return (
    <div className="pb-24 px-4">
      <h1 className="text-3xl font-bold mb-4 underline decoration-sky-500 text-center">
        Учёт расходов
      </h1>

      <div className="grid grid-cols-1 gap-4">
        {CATEGORIES.map((item) => {
          const isExpanded = item.id === expandedCardId;
          const amount = data[item.label] ?? 0;

          return (
            <div key={item.id}>
              <Card
                label={item.label}
                emoji={item.emoji}
                amount={amount}
                isExpanded={isExpanded}
                onClick={() => toggleCard(item.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}