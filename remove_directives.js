
// this code will execute in the code build of code pipeline.
const fs = require("fs");
const fileName = "test.graphql";
const data = fs.readFileSync(fileName, 'utf-8');
const ip = "directive @aws_subscribe(mutations: [String!]!) on FIELD_DEFINITION";
const newValue = data.replace(ip, '');
fs.writeFileSync(fileName, newValue, 'utf-8');