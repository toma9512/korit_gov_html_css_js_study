class Student {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("홍길동", 24);
console.log(student1);
console.log(student1.name);
console.log(student1.age);