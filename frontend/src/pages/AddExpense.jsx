import { useState } from "react";

export default function AddExpense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Добавлено: ${amount} ₽ — ${category}`);
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="pb-24">
      <h1 className="text-3xl font-bold mb-4 underline decoration-sky-500 text-center">Отменить расход</h1>

      <input
        type="number"
        placeholder="Сумма"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-3 p-2 rounded border"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-3 p-2 rounded border"
      >
        <option value="">Выберите категорию</option>
        <option value="Продукты">Продукты</option>
        <option value="Настя">Настя</option>
        <option value="Резерв">Резерв</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-xl"
      >
        Готово
      </button>
    </form>
  );
}