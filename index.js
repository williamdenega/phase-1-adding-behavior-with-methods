// Your code here

class Cat {
    constructor(name){
        this.name = name
    }
    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name){
        this.name = name
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        // if(this.sex === "male") return `It's me! ${this.name}, the parrot!`
        // return `${this.name} says Squawk!`
        return (this.sex === "male") ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`
    }

}
//return (collection instanceof Array) ? collection.slice() : Object.values(collection);

// bird = new Bird("Pablo", "male")
// bird2 = new Bird("Mable", "female")