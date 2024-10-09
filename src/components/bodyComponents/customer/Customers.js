import productList from "../inventory/productList";

const customers = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    position: "Software Engineer",
    mobile: "+212 6 51 88 61 51",
    orders: [
      {
        id: 1,
        products: [
          { quantity: 2, product: productList[0] },
          { quantity: 1, product: productList[1] },
        ],
      },
      {
        id: 2,
        products: [
          { quantity: 3, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    position: "Data Scientist",
    mobile: "+212 6 51 88 61 52",
    orders: [
      {
        id: 3,
        products: [
          { quantity: 4, product: productList[0] },
          { quantity: 2, product: productList[1] },
        ],
      },
    ],
  },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Williams",
    position: "Product Manager",
    mobile: "+212 6 51 88 61 53",
    orders: [
      {
        id: 4,
        products: [
          { quantity: 5, product: productList[1] },
        ],
      },
      {
        id: 5,
        products: [
          { quantity: 1, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Brown",
    position: "UX Designer",
    mobile: "+212 6 51 88 61 54",
    orders: [
      {
        id: 6,
        products: [
          { quantity: 3, product: productList[0] },
          { quantity: 2, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 5,
    firstName: "Emily",
    lastName: "Davis",
    position: "Marketing Specialist",
    mobile: "+212 6 51 88 61 55",
    orders: [
      {
        id: 7,
        products: [
          { quantity: 6, product: productList[1] },
        ],
      },
    ],
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Miller",
    position: "HR Manager",
    mobile: "+212 6 51 88 61 56",
    orders: [
      {
        id: 8,
        products: [
          { quantity: 1, product: productList[0] },
          { quantity: 4, product: productList[1] },
        ],
      },
    ],
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Wilson",
    position: "Business Analyst",
    mobile: "+212 6 51 88 61 57",
    orders: [
      {
        id: 9,
        products: [
          { quantity: 2, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Moore",
    position: "Software Engineer",
    mobile: "+212 6 51 88 61 58",
    orders: [
      {
        id: 10,
        products: [
          { quantity: 5, product: productList[0] },
          { quantity: 5, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 9,
    firstName: "Ivy",
    lastName: "Taylor",
    position: "Graphic Designer",
    mobile: "+212 6 51 88 61 59",
    orders: [
      {
        id: 11,
        products: [
          { quantity: 4, product: productList[1] },
          { quantity: 1, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Anderson",
    position: "Sales Manager",
    mobile: "+212 6 51 88 61 60",
    orders: [
      {
        id: 12,
        products: [
          { quantity: 3, product: productList[0] },
          { quantity: 2, product: productList[1] },
          { quantity: 1, product: productList[2] },
        ],
      },
    ],
  },
  // Add more entries if needed
];

export default customers;
