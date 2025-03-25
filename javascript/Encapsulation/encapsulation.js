class Player {
    constructor(name, dob, monthlySalary, noOfmonths){
        this.name = name,
        this.dob = dob,
        this.monthlySalary = monthlySalary,
        this.noOfmonths = noOfmonths
    }

    calculate_age(){
        const dob = new Date(this.dob);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        const dayDiff = today.getDate() - dob.getDate();
        
        // if the birthday hasn't happend yet in this year , substract 1 from age 
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
            age--;
        }

        return age;
    }

    getSalary(){
        return (this.monthlySalary * this.noOfmonths).toLocaleString("en-US", {style: "currency", currency:"BDT"});
    }
}


const player1 = new Player("ahosan", "1998-12-12", 10000, 2)
console.log(player1.getSalary());
console.log(player1.calculate_age());
