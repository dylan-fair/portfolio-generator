const fs = require("fs");
const generatePage = require('./src/page-template');
const profileDataArgs = process.argv.slice(2);
const [names, github] = profileDataArgs;
fs.writeFile("index.html", generatePage(names, github), err => {
  if(err) throw err;

  console.log("Portfolio complete! check out index.html to see ouput!");
})