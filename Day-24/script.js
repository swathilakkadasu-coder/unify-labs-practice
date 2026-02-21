
db.products.insertMany([
  {
    name: "Smartphone",
    category: "Electronics",
    price: 25000,
    stock: 15,
    specs: {
      color: "Black",
      weight: "180g"
    }
  },
  {
    name: "Laptop",
    category: "Electronics",
    price: 65000,
    stock: 5,
    specs: {
      color: "Silver",
      weight: "1.8kg"
    }
  },
  {
    name: "T-Shirt",
    category: "Clothing",
    price: 1200,
    stock: 50,
    specs: {
      color: "Blue",
      size: "M"
    }
  },
  {
    name: "Sofa",
    category: "Furniture",
    price: 40000,
    stock: 2,
    specs: {
      color: "Brown",
      material: "Leather"
    }
  },
  {
    name: "Dining Table",
    category: "Furniture",
    price: 55000,
    stock: 3,
    specs: {
      color: "Wood",
      seats: 6
    }
  }
])
