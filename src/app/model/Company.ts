export class Company {

    public id!: string;
    public razonSocial!: string;
    public cuit!: string;
    public email!: string;
    public contactName!: string;
    public contactLastName!: string;
    public contactNumber!: string;
    public amountEmployees!:number;


    constructor(company:any){

        this.id = company.id;
        this.razonSocial = company.razonSocial;
        this.cuit = company.cuit;
        this.email = company.email;
        this.contactName = company.contactName;
        this.contactLastName =company.contactLastName;
        this.contactNumber = company.contactNumber;
        this.amountEmployees = company.amountEmployees;
    }

}