// CODE here for your Lambda Classes

class Person{
    constructor(values){
        this.name = values.name;
        this.age = values.age;
        this.location = values.location;
        this.gender = values.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor (values){
        super(values);
        this.specialty = values.specialty;
        this.favLanguage = values.favLanguage;
        this.catchPhrase = values.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor (values){
        super(values);
        this.previousBackground = values.previousBackground;
        this.className = values.className;
        this.favSubjects = values.favSubjects;
    }
    listsSubject(){
        this.favSubjects.forEach(subject => console.log(`${subject}`));
    }
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(values){
        super(values);
        this.gradClassName = values.gradClassName;
        this.favInstructor = values.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel StandUp time!`
    }
    debugsCode(subject, student){
        return `${this.name} debugs ${student.name}'s code on ${subject}'
    }

}

//students

const dj = new Student ({
    name: 'DJ',
    age: 35,
    location: 'Woodland, WA',
    gender: 'M',
    previousBackground: 'Accountant',
    className: 'WebPT5',
    favSubjects: ['HTML5', 'CSS3', 'JavaScript'],
});

const josh = new Student ({
    name: 'Josh',
    age: 26,
    location: 'Chicago, IL',
    gender: 'M', 
    previousBackground: 'Mechanic',
    className: 'WebPT5',
    favSubject: ['HTML5', 'CSS3', 'JavaScript'],
});

const alex = new Student({
    name: 'Alex',
    age: 30,
    location: 'Seattle, WA',
    gender: 'M',
    previousBackground: 'waiter',
    className: 'WebPT5',
    favSubject: ['HTML5', 'CSS3', 'JavaScript'],
});

//New instructor

const christina = new Instructor({
    name: 'Christina',
    age: 30,
    location: 'Denver, CO',
    gender: 'F',
    specialty: 'Teaching',
    favLanguage: 'JavaScript, HTML5',
    catchPhrase: 'Don/t Bother Me'
});

//New PM

const brandon = new ProjectManager({
    name: 'Brandon',
    age: 40,
    location: 'San Diego, CA',
    gender: 'M',
    gradClassName: 'CS3',
    favInstructor: 'Cam Pope'
});

dj.speak();
josh.speak();
alex.speak();
christina.speak();
brandon.speak();

christina.demo();
christina.grade();

dj.listsSubjects();
josh.listsSubjects();
alex.listsSubjects();

dj.PRAssignments();
josh.PRAssignments();
alex.PRAssignments();

dj.sprintChallenge();
josh.sprintChallenge();
alex.sprintChallenge();

brandon.standUp();
brandon.debugsCode();

