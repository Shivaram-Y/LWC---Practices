import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    employee={
        Fname:'Shiva',
        Lname:'Ram',
        Age:35,
        City:'Hyderabad'
        }

        get getEmployeeAge()
       {
        const Age=this.employee.Age<=25?'One':this.employee.Age>25?'Second':'Third';
        return Age;

       }  
}
