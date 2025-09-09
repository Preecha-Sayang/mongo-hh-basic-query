db.pizzaOrders.updateMany(
  { title: "Jack" },
  { $set: { isAdmin: false } }
)

db.pizzaOrders.updateMany({},{$set:{ country: "Thailand"}}, {upsert: true})

db.pizzaOrders.updateOne({ title: "M"},
                         {$set:{
  "size": "large",
  "total_price": 200000,
  "quantity": 20,
  "customer_name": "M",
  "credit_card_type": "mastercard",
  "created_at": "2022-01-01T10:48:40Z"
}},{upsert: true})