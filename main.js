class Person {
    constructor(firstname, lastname, dateOfBirth) {
        this.firstname = firstname
        this.lastname = lastname
        this.dateOfBirth = dateOfBirth
    }
    getFullname() {
        //return string in the format 'lastname','firstname'
        return `${this.lastname}, ${this.firstname}`
    }
    isEqual(anotherPerson) {
        // compares this firstname and lastname to the specified another person object returns false if the fullname are different
        // and true , if it is the same (case sensititve) 
        return (
            this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&
            this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() 
        )
        
    }
    // return age by calculating from dateOfBirth
    getAge() {
    // return the number of millisecond
        const currentDateMilli = Date.now()
        const birthDateMilli = this.dateOfBirth.getTime()
        const diffMilli = currentDateMilli - birthDateMilli
        console.log(currentDateMilli, birthDateMilli, diffMilli)
        const diffDate = new Date(diffMilli)
        return diffDate.getFullYear() - 1970 
    }
    // return a string representing fullname and age
    toString() {
        return `${this.getFullname()}, ${this.getAge()}`
    }
}
const p1 = new Person("Umaporn","Sup",new Date(1980, 7, 30))
const p2 = new Person("Smaporn","Sup",new Date(1985, 1, 10))
console.log(p1.getFullname())
console.log(p2.getFullname())
console.log(p2.isEqual(p1))
console.log(p1.isEqual(p1))
console.log(p1.toString())
