class Player{
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
    printAge(){
        setTimeout(() => {
            console.log(this.age);
        }, 1000);
    }
    printName(){
        setTimeout(function(){
            console.log(this.name);
        },1000)
    }
}
var player = new Player(29, "chaudhary");
player.printAge()
player.printName()