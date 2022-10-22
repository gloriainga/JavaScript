/*function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName    
}

Person.prototype.printFullName = function(){
    console.log(`${this.firstName} ${this.lastName}`);
}
const person = new Person("Pablo", "Ramirez");
//person.printFullName();
console.log(Person);*/

class Person {

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.printFullNombre = this.printFullName.bind({
            firstName: "Raymond",
            lastName: "Poma"
        });
    }

    printFullName(){
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person = new Person("Pablo", "Ramirez");
person.printFullNombre();





