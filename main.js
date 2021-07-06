class School {
    constructor(name, level, numberOfStudents) {
        this.name = name;
        this.level = level;
        this.numberOfStudents = numberOfStudents;
    }

    get name() { return this.name; }
    get level() { return this.level; }
    get numberOfStudents() { return this.numberOfStudents; }

    quickFacts() { 
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);
    }

    static pickSustituteTeacher(substituteTeacher) {
        let randomNum = Math.floor(Math.random() * substituteTeacher.length);
        return substituteTeacher[randomNum];
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this.numberOfStudents = newNumberOfStudents;
        } else {
            console.log("Invalid input: numberOfStudents must be set to a number.");
        }
    }
}