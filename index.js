//Finding all employees who are either UI Designers or have a salary greater than 90000
db.employees.find({$or: [{"role":"UI Designer"},{"salary": {$gt: 90000}}]})

// Updating the salary of Jenny Smith to 95000
db.employees.updateOne({"name":"Jenny Smith"}, {$set: {"salary":95000}});

// Delete all employees without the role of developer
db.employees.deleteMany({"role": {$ne: "Developer"}});

// Find all employees whose name is Bob and who has React listed in their skills array
db.employees.find({$and: [{"name":"Bob"},{"skills":"React"}]});

// Projection query that shows only the name and salary of employees whose salay is between 60000 and 100000
db.employees.find({"salary": {$gte: 60000, $lte: 100000}},{"name": 1, "salary": 1, _id: 0})

// Find all employees that are neither Frontend Developers nor have a slary below 70000
db.employees.find({$nor: [{"role": "Frontend Developer"}, {"salary": {$lt: 70000}}]})


// Inserting a new document
db.employees.insertOne({"name":"Charlie", "role":"Backend Developer", "salary":80000});

// Inserting multiple documents
db.employees.insertMany([{"name":"Sophie", "role":"UI Designer", "salary": 700000},{"name":"Chris", "role":"Frontend Developer", "salary": 75000}]);

// Finding employees whose salary is greater than or equal to 60000
db.employees.find({"salary": {$gte: 60000}});

// Update the salary of Chris to 85000
db.employees.updateOne({"name":"Chris"},{$set: {"salary": 85000}});

// Delete all employees whose role is Intern
db.employees.deleteMany({"role":"Intern"})

// Finding all employees who are either Backend Developers or have salaries greater than 90000
db.employees.find({$or: [{"role": "Backend Developer"},{"salary": {$gt: 90000}}]});

// Finding employees whose salary is between 70000 and 90000 inclusive
db.employees.find({"salary": {$gte: 70000, $lte: 90000}});

// Finding employees who have both React and Node.js
b.employees.find({"skills": {$all: ["React", "Node.js"]}})

