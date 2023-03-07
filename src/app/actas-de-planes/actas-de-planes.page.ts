import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from '../service/api-service/api.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-actas-de-planes',
  templateUrl: './actas-de-planes.page.html',
  styleUrls: ['./actas-de-planes.page.scss'],
})
export class ActasDePlanesPage implements OnInit {
  items!: MenuItem[];
  companies!:any;
  constructor(private router: Router,private messageService: MessageService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get(ApiService.apiURLCompaniesActas).subscribe({next: companies => {
      this.companies = companies;
      console.log(companies);
    },
    error: (error: { message: any; }) =>{
      console.log(error.message);
      this.messageService.add({severity:'error', summary:error.message, life:2000});
    }
  });
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
  showDialog(){
    console.log("Evento de click en el menu")
  }
}
