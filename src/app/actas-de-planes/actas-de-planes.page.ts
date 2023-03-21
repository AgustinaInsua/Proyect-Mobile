import { catchError } from 'rxjs';
import { Calculadora } from './../model/Calculadora';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from '../service/api-service/api.service';
import {MenuItem} from 'primeng/api';
import { Table } from 'primeng/table';
import { RecordDTO } from '../model/dto/recordDTO';
import { FIELDS_TABLE_DEBTS, FIELDS_TABLE_PAYMENTS, FIELDS_TABLE_RECORD } from '../model/mock-fieldsTableRecord';
import { CalculatorPage } from '../components/calculator/calculator.page';
import { Company } from '../model/Company';

@Component({
  selector: 'app-actas-de-planes',
  templateUrl: './actas-de-planes.page.html',
  styleUrls: ['./actas-de-planes.page.scss'],
})
export class ActasDePlanesPage implements OnInit {

  //calculadora
  display: boolean = false;  
  displayPago:boolean = false;  
  displayDeuda:boolean = false;  
  submitted: boolean = true;  
  value: any;
  minDate!: Date;
  selecAprobador: any;
  selecAmountPayments: any;
  selecPeriodicity: any;
  isRequerid:boolean =true;
  calculator!: Calculadora;
  //actas
  selectedPeriod!:Array<any>;
  items!: MenuItem[];
  records!:any;
  periods!:any;
  company!:Company;
  load!:boolean;

  //cheque
  banks!: any;
  cheques!: any;
  selectedBank: any;
  accountNumber !: Number;
  zipCode !: string;
  displayCheque: boolean = false;

  fieldsTableRecord = FIELDS_TABLE_RECORD;
  fieldsTableDebts = FIELDS_TABLE_DEBTS;
  fieldsTablePayments = FIELDS_TABLE_PAYMENTS;
  suggestionsCompanies!: string[] ;
  constructor(private router: Router,private messageService: MessageService,
    private apiService: ApiService, private recordDTO: RecordDTO) { }

  ngOnInit() {

    //ToDo:llevarlo a un componente externo
    this.calculator = new Calculadora();
    //acta
    this.apiService.get(ApiService.apiURLCompanies +"/64640/actas").subscribe({next: records => {
      this.recordDTO.setRecordByCompany(records);
    },
    error: (error: { message: any; }) =>{
      console.log(error.message);
      this.messageService.add({severity:'error', summary:error.message, life:2000});
    }
  });

  this.apiService.get(ApiService.apiURLCompanies +"/64640/actas/56540").subscribe({next: records => {
    this.recordDTO.setPeriodByRecord("56540");
    this.records= records;
    this.periods = this.recordDTO.getPeriodByRecord();
  },
    error: (error: { message: any; }) =>{
      this.messageService.add({severity:'error', summary:error.message, life:2000});
    }
  });

  this.apiService.get(ApiService.apiURLCompanies+"/64640").subscribe({next: companies => {
    this.company = new Company(companies);
    this.load = true;
    console.log(this.company);
  },
  error: (error: { message: any; }) =>{
    console.log(error.message);
    this.messageService.add({severity:'error', summary:error.message, life:2000});
  }
  });

  this.cheques = [
    {
      cuote: "1",
      datePayment: "10-02-23",
      dateAcred: "",
      amountPay: "4215",
      import: "4215",
      bank : ""
    },
    {
      cuote: "2",
      datePayment: "10-03-23",
      dateAcred: "",
      amountPay: "4324",
      import: "4324",
      bank : ""
    }     
  ];

  this.banks = [
    {name:"Santander"}, 
    {name:"ICBC"}, 
    {name:"Galicia"}, 
    {name:"Credicoop"}, 
    {name:"Provincia"}, 
    {name:"Brubank"}, 
    {name:"Nacion"}, 
    {name:"BBVA"}, 
    {name:"Patagonia"}];

  this.items = [
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
      label: "Actualizaciones",
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
                this.showDialogCheque();
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
          //  this.showDialog();
        }},
        {
          label: "Calculadora",
          command: (event) => {
            this.showDialogCalculator();
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

  showDialogCalculator(){
    this.display = true;
  }

  showDialogPago(event:any){
    this.displayPago = true;
    this.selectedPeriod = new Array();
    this.selectedPeriod.push(event);
  }

  showDialogDeuda(event:any){
    this.displayDeuda = true
    this.selectedPeriod = new Array();
    this.selectedPeriod.push(event);
  }

  CancelShowDialog(){
    this.display = false;
  }

  showDialogCheque(){
    this.displayCheque = true;
  }

  selectEvent(event:any){
    if(this.selecAmountPayments !=null && this.calculator.date != null ){
      this.submitted = false; 
      }else {
      this.submitted = true; }
  }
 
  onFilter(event: any, table: Table){
  }
  
  clear (table: Table){
    table.clear();
  }
}
