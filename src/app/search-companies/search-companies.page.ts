import { environment } from 'src/environments/environment';
import { ApiService } from '../service/api-service/api.service';
import { Company } from './../model/Company';
import { COMPANIES } from './../model/mock-company';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { FIELDS_TABLE_COMPANY } from '../model/mock-fieldsTableCompany';
import { CompanyService } from '../service/company-service/company.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { error } from 'console';
import { MessageService } from 'primeng/api';
import { CompanyDTO } from '../model/dto/companyDTO';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-search-companies',
  templateUrl: './search-companies.page.html',
  styleUrls: ['./search-companies.page.scss'],
})
export class SearchCompaniesPage implements OnInit {
  companies !: Company[];
  fieldsTableCompany = FIELDS_TABLE_COMPANY;
  suggestionsCompanies!: string[] ;
  urlCompanies: any;
  urlCompaniesPDF:any;
  megaItems!: MegaMenuItem [];
  items!: MenuItem[];
  display: boolean = false;
  value: any;
  selecAprobador: any;
  selecAmountPayments: any;
  selecPeriodicity: any;

  aprobadores = ["Gaston Alles", "Noelia Sosa"];
  amountPayments = ["1","2","3","4","5","6","7","8","9","10","11","12"];
  periodicity = ["15","30","60"];
    
  constructor(private router: Router,private messageService: MessageService,private companyDTO: CompanyDTO,private companyService: CompanyService, private apiService: ApiService) { }

  ngOnInit() {

    this.urlCompanies = ApiService.apiURLCompanies;
    this.urlCompaniesPDF = ApiService.apiPdfURL;
    this.apiService.get(ApiService.apiURLCompanies).subscribe({next: companies => {
      this.companies = companies;
      console.log(companies);
    },
    error: (error: { message: any; }) =>{
      console.log(error.message);
      this.messageService.add({severity:'error', summary:error.message, life:2000});
    }
  })

  this.items = [
    {
      label: "Acciones",
      items: [
          {
            label: "Guardar",
            command: (event) => {
              console.log("Guardar");
          }},
          {
            label: "Cerrar",
            command: (event) => {
              console.log("Cerrar");
          }},
          {
            label: "Cancelar",
            command: (event) => {
              console.log("Cancelar");
          }},
          {
            label: "Salir",
            command: (event) => {
              console.log("Salir");
          }}
      ]
    },
    {
      label: "Imprimir",
      icon: "pi pi-fw pi-print",
      items: [
        {
          label: "Resumen",
          command: (event) => {
           console.log("Imprimir resumen");
        }
      },
        {
          label: "Actas",
          items:[
            { label: "Acta", 
              command: (event) => {
                console.log("Imprimir Acta")
              }
            },
            { label: "Acta Compactada", 
              command: (event) => {
                console.log("Imprimir Acta Acompactada")
              }
            }
          ]
        },
        {
          label: "Certificados",
          items:[
            { label: "Certificado", 
              command: (event) => {
                console.log("Imprimir Certificado")
              }
            },
            { label: "Certificado Compactado", 
              command: (event) => {
                console.log("Imprimir Certificado Compactado")
              }
            }
          ]},
        {
          label: "PDF Adhesion",
          command: (event) => {
           console.log("PDF Adhesion");
        }}
    ]
    },
    {
      label: "Actualizaciones",
      items: [
        {
          label: "Actualizar Datos",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Asoc. Fecha Calc. Int.",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Aprobar Fecha Calc. Int",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Calculadora",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Asoc. Fecha de Pago",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Asoc. Cheque",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Asoc. CBU General",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Aprobar Fecha de Acreditación",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Eliminar Fecha de Pago",
          command: (event) => {
            this.showDialog();
        }}
      ]
    },
    {
      label: "Actualizaciones 2",
      items: [
        {
          label: "Asociar",
          items:[
            { label: "Fecha Calc. Int.", 
              command: (event) => {
                console.log("Asociar Fecha Calc. Int.")
              }
            },
            { label: "Fecha de Pago", 
              command: (event) => {
                console.log("Asociar Fecha de Pago")
              }
            },
            { label: "Cheque", 
              command: (event) => {
                console.log("Asociar Cheque")
              }
            },
            { label: "CBU General", 
              command: (event) => {
                console.log("Asociar CBU General")
              }
            }
          ]},
          {
            label: "Aprobar",
            items:[
              { label: "Fecha Calc. Int.", 
                command: (event) => {
                  console.log("Asociar Fecha Calc. Int.")
                }
              },
              { label: "Fecha de Acreditación", 
                command: (event) => {
                  console.log("Asociar Fecha de Pago")
                }
              }
            ]},
        {
          label: "Actualizar Datos",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Calculadora",
          command: (event) => {
            this.showDialog();
        }},
        {
          label: "Eliminar",
          items:[
            { label: "Fecha de Pago", 
              command: (event) => {
                console.log("Asociar Fecha Calc. Int.")
              }
            }
          ]}
      ]
    }
  ];
   }

  onFilter(event: any, table: Table){
  }

  searchActas(i:string) {
    this.companyDTO.setCompanyInformationID(this.companies[parseInt(i)].id);
    this.router.navigate(['search-companies/boletas-emitidas']);
  }

  editData(i:string){
    this.companyDTO.setCompanyInformation(this.companies[parseInt(i)]);
    this.urlCompanies = ApiService.apiURLCompanies + this.companyDTO.getCompanyInformationMail();
    this.router.navigate(['search-companies/actualizar-datos']);
  }

  clear (table: Table){
    table.clear();
  }

  showDialog() {
    this.display = true;
}

}
