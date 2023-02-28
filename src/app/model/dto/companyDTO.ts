import { Company } from 'src/app/model/Company';


export class CompanyDTO {

  companies!: Company[];
  id: any;
  mail: any;

  constructor() { }

  setCompanyInformation(companyInformation: any){
    this.companies = companyInformation;  }

  getCompanyInformation(){
    return this.companies;
  }

  setCompanyInformationID(id: any){
    this.id = id;
  }

  getCompanyInformationID(){
    return this.id;
  }

  setCompanyInformationMail(mail: any){
    this.mail = mail;
  }

  getCompanyInformationMail(){
    return this.mail;
  }
  
}
