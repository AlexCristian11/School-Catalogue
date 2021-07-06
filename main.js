class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() { return this._name; }
    get level() { return this._level; }
    get numberOfStudents() { return this._numberOfStudents; }

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

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() { return this._pickupPolicy; }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
        super(name, "high", numberOfStudents);
        this._sportsTeam = sportsTeam;
    }

    get sportsTeam() { return this._sportsTeam; }
}

