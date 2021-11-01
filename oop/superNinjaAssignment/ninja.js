class Ninja {
    constructor(nameInput, health) {
        this.name = nameInput;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        let speak = `${this.name}`
        console.log(speak)
    }
    
    showStats() {
        let info = `Ninja Stats: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength} \n Wisdom: ${this.wisdom}`
        console.log(info)
    }

    drinkSake() {
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(nameInput, health) {
        super(nameInput, health)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }

    speakWisdom() {
        let smart = `Wisdom: ${this.wisdom}`
        console.log("If You Love Something, Let Go. If It Comes Back To You, It's Yours. If It Doesn't, It Never Was.")
    }
}

ninja1 = new Ninja("Don Brown", 100)
ninja2 = new Sensei("Rob Brown", 200, 10, 10)
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

ninja2.showStats();
ninja2.drinkSake();
ninja2.speakWisdom()
ninja2.showStats();
