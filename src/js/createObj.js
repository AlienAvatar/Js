function createPerson(name,age,job){
    let person = new Object();
    person.name = name;
    person.age = age;
    person.job = job;
    person.sayName = function () {
       console.log(this.name);
    };
    return person;
}

let person1 = createPerson("Nicholas",20,"engineer");
console.log(person1);
console.log(person1.sayName());


