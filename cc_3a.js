// Coding Challenge 03a

let customers = [{
    name: "Jane",
    email: "jane.pearson@gmail.com",
    purchases: "extension cord, water bottle, backpack",
},
{
    name: "Horace",
    email: "itshoracep@gmail.com",
    purchases: "USB, case",
},
{
    name: "Zoe",
    email: "zoey101@gmail.com",
    purchases: "notebook, pencil, eraser, markers",
},
{
    name: "Carson",
    email: "carsonshome172@gmail.com",
    purchases: "brush, gel",
}]

console.log(customers);

// Added new customer

newCustomer = {name: "Lila", email: "lilamoss@gmail.com", purchases: 20}
customers.push(newCustomer)

console.log(customers);

// Removed first customer

customers.shift();

// Updates Zoey's email

customers[1].email = ("zoey101@pca.edu")

console.log(customers);

customers.push()