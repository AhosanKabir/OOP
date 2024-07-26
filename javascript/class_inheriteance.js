class PersonClass {
    constructor(name, age, job){
        this._name = name;
        this._age = age;
        this._job = job;
    }

    _detailsOfPerson(){
        const date = new Date();
        console.log(
            `${this._name} is born in ${date.getFullYear() - this._age} and He is a ${this._job}`
        );
    }
}

const sayeedVai = new PersonClass("sayeed vai", 28, "student")
sayeedVai._detailsOfPerson();


class TeacherClass extends PersonClass {
    constructor(name, age, job, subject){
        super(name, age, job);
        this._subject = subject;
    }
}

const Teacher1 = new TeacherClass("abul sir", 50, "teacher", "science")
Teacher1._detailsOfPerson();