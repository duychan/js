let customer = {
  name: "Carl",
  details: {
    age: {
      value: 10,
      status: "alive",
    },
    location: "Paradise Falls", // detailed address is unknown
  },
};
let customerCity = customer.details?.age?.status;

// … this also works with optional chaining function call
let customerName = customer?.name; // method does not exist, customerName is undefined
console.log(customerCity);
