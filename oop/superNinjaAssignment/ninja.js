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
        let info = `Ninja Stats: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`
        console.log(info)
    }

    drinkSake() {
        this.health += 10
    }
}
ninja1 = new Ninja("Don Brown", 100)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();