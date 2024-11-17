






const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();

