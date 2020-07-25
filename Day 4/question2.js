const student = {
    name: 'helsinky',
    age: 24,
    project :{
        diceGame : 'two play dice game using javascript',
    }
}
const {name, age, project:{diceGame}} = student;

console.log(name, diceGame);