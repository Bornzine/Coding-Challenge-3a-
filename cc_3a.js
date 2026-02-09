

let customers = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@gmail.com",
    purchases: ["Laptop", "Mouse"]
  },
  {
    name: "Brian Smith",
    email: "smith.brian@gmail.com",
    purchases: ["Phone"]
  },
  {
    name: "Carmen Lee",
    email: "carmen.lee@gmail.com",
    purchases: ["Tablet", "Headphones", "Charger"]
  }
];


function addCustomer(name, email, purchases = []) {
  customers.push({ name, email, purchases });
}

function removeFirstCustomer() {
  customers.shift();
}

function updateCustomerEmail(customerName, newEmail) {
  customers.forEach(customer => {
    if (customer.name === customerName) {
      customer.gmail = newEmail;
    }
  });
}

function addPurchase(customerName, purchase) {
  customers.forEach(customer => {
    if (customer.name === customerName) {
      customer.purchases.push(purchase);
    }
  });
}


addCustomer("David Miller", "david.miller@gmail.com", ["Monitor"]);
removeFirstCustomer();


updateCustomerEmail("Brian Smith", "smith.brian@gmail.com");
addPurchase("Brian Smith", "Phone Case");


customers.forEach(customer => {
  console.log(
    `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
  );
});



