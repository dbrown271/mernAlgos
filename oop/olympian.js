class Olympian {
    constructor(nameInput, ageInput) {
        // Instance variables, or member variables, or in javascript ---> object properties
        this.name = nameInput
        this.age = ageInput
        this.health = 100
        this.energy = 100
        if(nameInput == "Allen Iverson") {
            this.speed = 100
        } else {
            this.speed = 70
        }
        this.strength = 70
    }
    // olympians can also perform methods
    showStats() {
        let info = `My Stats Are This: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Energy: ${this.energy}`
        console.log(info)
    }
    takeIceBath(){
        console.log("This is the wim hof way, taking an ice bath...")
        this.health += 10
    }
}

class Swimmer extends Olympian {
    constructor(nameInput, ageInput) {
        super(nameInput, ageInput)
        this.strength = 60 // Swimmer can have different qualities
        this.swimSpeed = 70
    }
    swimAndRecover(){
        console.log("swimming pools.. drank")
        this.energy -= 10
        console.log(" Time For IceBath")
        super.takeIceBath()
    }

}

// instances of the olympian class
o1 = new Olympian("Kobe Bryant", 32)
o2 = new Olympian("Allen Iverson", 31)
o3 = new Olympian("Carmelo Anthony", 28)

//INstance of Swimmer
s1 = new Swimmer("Michael Phelps", 38)
console.log(s1)
s1.takeIceBath()
console.log(s1)
s1.swimAndRecover()
s1.showStats()


