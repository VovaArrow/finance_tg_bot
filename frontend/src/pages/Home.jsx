import Card from "../components/Card";
import { useState } from "react";

const items = [
  { id: 1, label: "Продукты", emoji: "🥗", amount: 42000 },
  { id: 2, label: "Настя", emoji: "💝", amount: 15000 },
  { id: 3, label: "Резерв", emoji: "💰", amount: 18000 },
];

export default function Home() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleCard = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pb-24 px-4">
      <h1 className="text-3xl font-bold mb-4 underline decoration-sky-500 text-center">
        Учёт расходов
      </h1>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => {
          const isExpanded = item.id === expandedCardId;

          return (
            <div
              key={item.id}
            >
              <Card
                label={item.label}
                emoji={item.emoji}
                amount={item.amount}
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