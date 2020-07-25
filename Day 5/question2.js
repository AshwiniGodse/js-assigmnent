class User{
    constructor(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email;
    this.courses = [];
}

 login(){
    console.log(`${this.name } has logged in.`);
}
 logout(){
    console.log(`${this.name } has logged out.`);
}
}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = "Modrator";
        this.luCoins = 0;
       
    }
    
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
    }
}
class Admin extends Moderator{
    addCourse(employee,course){
        employee.courses.push(course);
        console.log(employee);
    }
    
}
let employee1 = new User("Ashwini", "22","a@gmail.com");
let employee2 = new User("Anand", "30","b@gmail.com");
let employee = [employee1, employee2];
employee.forEach(element => {
    console.log(element);
});
console.log(employee);
employee1.login();
let mod = new Moderator("Omkar","24","o@gmail.com","moderator");
console.log(mod);
mod.login();
mod.addCoins();
mod.addCoins();
mod.removeCoins();
let admin = new Admin("Abhishek","21","ab@gmail.com");
console.log(admin);
admin.addCourse(employee1,"javascript");
admin.addCourse(employee1,"java");


