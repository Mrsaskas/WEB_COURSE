

class Employee {
    constructor(firstName, lastName, salary, experience)
    {
        this.firstName = firstName
        this.lastName = lastName 
        this.salary = salary
        this.experience = experience
    }

    countedSalary()
    {
        if(this.salary >= 2 && this.exp < 5)
        {
            this.salary += 200
        }
        else if(this.salary >= 5)
        {
            this.salary = (this.salary * 1.2) + 500
        }

        return this.salary;

    }

}


class Developer extends Employee 
{
    constructor(firstName, lastName, salary, experience)
    {
        super(firstName, lastName, salary, experience)
    }


}


class Designer extends Employee
{
    constructor(firstName, lastName, salary, experience, ef)
    {
        super(firstName, lastName, salary, experience)
        this.ef = ef
    }

    countedSalary() {
        return (super.countedSalary() * this.ef).toFixed();
    }

}

class Manager  extends Employee
{
    constructor(firstName, lastName, salary, experience, team)
    {
        super(firstName, lastName, salary, experience)
        this.team = team
    }

    em_number()
    {
        let num;
 

        this.team.forEach(el =>{

            num++;

        });

        return num;
    }

    countedSalary()
    {
        let ndev = 0;
        // let sel = super.countedSalary();

        for (let item of this.team) {
            if (item.constructor.name == "Developer")  ndev++;
        }

        if(this.em_number(this.team) >= 5  && this.em_number(this.team) < 10)
        {
            this.salary +=200;

        }

        else if(this.em_number(this.team) >= 10 )
        {
            this.salary +=300;

        }

        if(ndev > this.em_number(this.team))
        {
            this.salary *= 1.1
        }

        return sel.toFixed();
    }

}

class Department
{
    constructor(manager)
    {
        this.manager = manager
    }

    giveSalary()
    {
        this.manager.forEach(manager => {
            console.log(`${manager.firstName} ${manager.lastName} receives ${manager.countedSalary()} money`);
            manager.team.forEach(employee =>{
                console.log(`${employee.name} ${employee.surname} receives ${employee.countedSalary()} money`);
            });
            
        });

    }

   

}


