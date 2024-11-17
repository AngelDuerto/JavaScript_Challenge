
//Person Constructor
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    //Method that logs fun message
exercise() {
    console.log("Running is fun!, not really")
}

    //Method that logs person job
fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
    }
}

    //programmer constructor that extends person class
class Programmer extends Person{
    constructor(name, job, age, languages) {
        super(name, job, age); //Inherit properties from person class
        this.languages = languages; //Languages known by programmer
        this.busy = true; // Inital Busy is true
    }

    //Method to complete a task, setting status to not busy
    completeTask() {
        this.busy = false;
    };

    //Method to accept a new task, setting busy to true
    acceptNewTask() {
        this.busy = true;
    };

    //Method to offer a new task, and log programmer availability
    offerNewTask() {
        if(this.busy === true) {
            console.log(`${this.name} can't accept any new tasks right now`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }


        //Method to learn a new programing language, and adding it to the list
    learnLanguage(newSkill) {
        this.languages.push(newSkill);
    }

        //Method to list all languages
    listLanguages() {
        console.log(this.languages);
    }
}

// Testing
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, [("HTML", "CSS", "JS", "R")]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

// c1.listLanguages();
// c2.listLanguages();
// c3.listLanguages();

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();