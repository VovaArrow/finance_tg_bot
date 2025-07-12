from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import datetime
import json
import os

app = FastAPI()

DATA_FILE = "data.json"

# Разрешаем фронту обращаться
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Лучше заменить на фронтовый домен/URL в проде
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Инициализация файла, если нет
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump({
            "Продукты": 42000,
            "Настя": 15000,
            "Резерв": 18000,
            "лог": []
        }, f)

@app.get("/state")
def get_state():
    with open(DATA_FILE, "r") as f:
        data = json.load(f)
    return data

class AddExpense(BaseModel):
    category: str
    amount: int

class CancelPay(BaseModel):
    category: str
    amount: int

@app.post("/pay")
def pay(expense: AddExpense):
    with open(DATA_FILE, "r") as f:
        data = json.load(f)

    if expense.category in data:
        data[expense.category] -= expense.amount
    else:
        return {"error": "Invalid category"}  

    data["лог"].append({
        "mode": "pay",
        "category": expense.category,
        "amount": expense.amount,
        "timestamp": datetime.datetime.now().isoformat()
    })  

    with open(DATA_FILE, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    return {"status": "ok", "new_balance": data[expense.category]}  


@app.post("/cancel")
def cancel(cost: CancelPay):
    with open(DATA_FILE, "r") as f:
        data = json.load(f)

    if cost.category in data:
        data[cost.category] += cost.amount
    else:
        return {"error": "Invalid category"}  

    data["лог"].append({
        "mode": "cancel",
        "category": cost.category,
        "amount": cost.amount,
        "timestamp": datetime.datetime.now().isoformat()
    })  

    with open(DATA_FILE, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    return {"status": "ok", "new_balance": data[cost.category]}   