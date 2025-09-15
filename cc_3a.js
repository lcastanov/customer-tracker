// Coding Challenge 03a

let customers = [{
    name: "Jane",
    email: "jane.pearson@gmail.com",
    purchases: 12,
},
{
    name: "Horace",
    email: "itshoracep@gmail.com",
    purchases: 5,
},
{
    name: "Zoe",
    email: "zoey101@gmail.com",
    purchases: 101,
},
{
    name: "Carson",
    email: "carsonshome172@gmail.com",
    purchases: 2,
}]

console.log(customers);

newCustomer = {name: "Lila", email: "lilamoss@gmail.com", purchases: 20}
customers.push(newCustomer)

console.log(customers);

customers.shift();

customers[1].email = ("zoey101@pca.edu")

console.log(customers);