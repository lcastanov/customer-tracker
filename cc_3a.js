// Coding Challenge 03a

let customers = [{
    name: "Jane",
    email: "jane.pearson@gmail.com",
    purchases: ["extension cord", "water bottle", "backpack"],
},
{
    name: "Horace",
    email: "itshoracep@gmail.com",
    purchases: ["USB", "case"],
},
{
    name: "Zoey",
    email: "zoey101@gmail.com",
    purchases: ["notebook", "pencil", "eraser", "markers"],
},
{
    name: "Carson",
    email: "carsonshome172@gmail.com",
    purchases: ["brush", "gel"],
}]


// Added new customer

newCustomer = {name: "Lila", email: "lilamoss@gmail.com", purchases: ["heels", "nail polish", "lipstick"]}
customers.push(newCustomer)


// Removed first customer

customers.shift();


// Updates Zoey's email

customers[1].email = ("zoey101@pca.edu")

console.log(customers);


// Added new purchase for Zoey

customers[1].purchases.push("gel")

// Looping and Logging

customers.forEach(obj =>console.log(`Name: ${obj.name} |`, `Email: ${obj.email} |`, `Total # of Purchases: ${obj.purchases.length}`));