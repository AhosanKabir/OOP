
class Student{

    constructor(name, email){
        this._name = name;
        this._email = email;
    }

    print(){
        console.log(this);
    }

}

const s1 = new Student( "new student 1", 'abcd@gamil.com');
const s2 = new Student("new student 2", 'efg@gamil.com');

s1.print();
s2.print();
