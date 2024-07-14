// complete this js code
class Person{
	constructor(name, age) {
	this.name = name;
	this.age = age;
	}

	greet(){
		return `Hello my name is ${this.name} , I  am ${this.age} year old`;
	}
}

class Employee extends Person{
	constructor(name, age, jobTitle) {
	super(name , age)
	this.jobTitle = jobTitle;
 }
   jobGreet(){
		return `Hello my name is ${this.name} , I  am ${this.age} year old
		and my job title is ${jobTitle}`;
	}
						
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
