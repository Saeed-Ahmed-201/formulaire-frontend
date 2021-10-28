import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-formulaire-list',
  templateUrl: './formulaire-list.component.html',
  styleUrls: ['./formulaire-list.component.css']
})
export class FormulaireListComponent implements OnInit {
  
  updateForm : FormGroup  | any;
  exploitations = ['ملكية فردية','ملك مشترك','كراء','على وجه الفضل','وجه إستغلال آخر'];
  singleItem : any;
  items: any[] = [];
  updateFormValues: any;
  frais_de_soinStatus : boolean =false;
  frais_d_etudesStatus: boolean = false;
  paiement_de_la_consommation_d_eauStatus: boolean =false;
  paiement_de_la_consommation_d_electriciteStatus: boolean=false;
  payer_les_frais_de_loyerStatus: boolean = false;
  valeurA: number | any;
  valeurC: number | any;
  valeurB: number | any;
  valeurD: number | any;
  valeur_somme: number | any;
  show: boolean = false;
  showPrinter: boolean = false;
 
  constructor(private http: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
   
    this.http.retrieveRecords().subscribe(data => {
      this.items = data;
      console.log(this.items)
    });

    this.updateForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      age: new FormControl(0,[Validators.required]),
      nom: new FormControl('',  [Validators.required, Validators.pattern(/[A-Z]/)]),
      prenom: new FormControl('',  [Validators.required]),
      num: new FormControl('',[Validators.required]),
      cite: new FormControl('',[Validators.required]),
      province: new FormControl('',[Validators.required]),
      telephone1: new FormControl("",[Validators.required]),
      telephone2:new FormControl("", [Validators.required]),
      nombre_d_enfant_d_age_prescolaire:new FormControl("",[Validators.required]),
      nombre_d_enfants_scolarises:new FormControl("",[Validators.required]),
      nombre_de_chomeurs:new FormControl("",[Validators.required]),
      nombre_de_personnes_atteintes: new FormControl("",[Validators.required]),
      somme: new FormControl("",[Validators.required]),
      optionalValue2: new FormControl("",[Validators.required]), 
      etatDeSante: new FormControl("",[Validators.required]), 
      etatCivil: new FormControl("",[Validators.required]), 
      parents_ou_ascendants_en_parrainage: new FormControl("",[Validators.required]), 
      revenuContinental: new FormControl("",[Validators.required]),
      couvertureSociale: new FormControl("",[Validators.required]),
    });  
    

  }

  // deleteRecord(id: number){
  //       this.http.deleteRecord(id).subscribe(data => {
        
  //         this.items = data
  //        }
  //       )
  // }
  openModal2(data:any){
       this.singleItem = data;
       this.singleItem.frais_de_soin = (data.frais_de_soin === 'true' || data.frais_de_soin === true) ? true : false;
       this.singleItem.paiement_de_la_consommation_d_electricite = (data.paiement_de_la_consommation_d_electricite === 'true' ||data.paiement_de_la_consommation_d_electricite === true) ? true : false;
       this.singleItem.payer_les_frais_de_loyer = (data.payer_les_frais_de_loyer === 'true' || data.payer_les_frais_de_loyer === true ) ? true : false;
       this.singleItem.frais_d_etudes = (data.frais_d_etudes === 'true' || data.frais_d_etudes === true) ? true : false;
       this.singleItem.paiement_de_la_consommation_d_eau = (data.paiement_de_la_consommation_d_eau === 'true' || data.paiement_de_la_consommation_d_eau === true) ? true : false;
      console.log(this.singleItem) 
  }
  openModal(data : any){
    this.updateFormValues = data;
    
    // this.updateFormValues.frais_de_soin = (data.frais_de_soin === 'true' || data.frais_de_soin === true) ? true : false;
    // this.updateFormValues.paiement_de_la_consommation_d_electricite = (data.paiement_de_la_consommation_d_electricite === 'true' || data.paiement_de_la_consommation_d_electricite === true) ? true : false;
    // this.updateFormValues.payer_les_frais_de_loyer = (data.payer_les_frais_de_loyer === 'true' || data.payer_les_frais_de_loyer === true) ? true : false;
    // this.updateFormValues.frais_d_etudes = (data.frais_d_etudes === 'true' || data.frais_d_etudes === true) ? true : false;
    // this.updateFormValues.paiement_de_la_consommation_d_eau = (data.paiement_de_la_consommation_d_eau === 'true' || data.paiement_de_la_consommation_d_eau === true) ? true : false;  
    
    this.updateForm.patchValue({
      id:this.updateFormValues.id,
      nom:this.updateFormValues.nom ,
      prenom:this.updateFormValues.prenom ,
      num:this.updateFormValues.num ,
      cite:this.updateFormValues.cite,
      province:this.updateFormValues.province,
      telephone1:this.updateFormValues.telephone1 ,
      telephone2:this.updateFormValues.telephone2,
      nombre_d_enfant_d_age_prescolaire:this.updateFormValues. nombre_d_enfant_d_age_prescolaire,
      nombre_d_enfants_scolarises:this.updateFormValues.nombre_d_enfants_scolarises,
      nombre_de_chomeurs:this.updateFormValues.nombre_de_chomeurs,
      nombre_de_personnes_atteintes:this.updateFormValues.nombre_de_personnes_atteintes,
      optionalValue2:this.updateFormValues.optionalValue2 , 
      somme: this.updateFormValues.somme,
      etatCivil: this.updateFormValues.etatCivil,
      etatDeSante: this.updateFormValues.etatDeSante,
      parents_ou_ascendants_en_parrainage: this.updateFormValues.parents_ou_ascendants_en_parrainage,
      revenuContinental: this.updateFormValues.revenuContinental,
      couvertureSociale:this.updateFormValues.couvertureSociale

     });
  }

  // changeCheckState(number:any){
  //   if(number  == 1)
  //      this.frais_de_soinStatus = !this.frais_de_soinStatus;
  //   if(number  == 2)
  //      this.frais_d_etudesStatus = !this.frais_d_etudesStatus;
  //   if(number  == 3)
  //      this.paiement_de_la_consommation_d_eauStatus = !this.paiement_de_la_consommation_d_eauStatus;
  //   if(number == 4)
  //     this.paiement_de_la_consommation_d_electriciteStatus = !this.paiement_de_la_consommation_d_electriciteStatus;
  //   if(number ==5)
  //   this.payer_les_frais_de_loyerStatus = !this.payer_les_frais_de_loyerStatus;

     
  // }
  onSubmit(){
    // this.http.updateRecord(this.updateForm.value).subscribe(data => {
    //   this.openModal(data);
    // });
    // this.http.retrieveRecords().subscribe(data => {
    //   this.items = data;
    // });

  } 
  onChange(){
    this.updateForm.valueChanges.subscribe((data : any) => {
         this.valeurA = Number.isNaN(Number.parseInt(data. nombre_d_enfant_d_age_prescolaire)) ? 0 : Number.parseInt(data. nombre_d_enfant_d_age_prescolaire) ;
         this.valeurB =  Number.isNaN(Number.parseInt(data.nombre_d_enfants_scolarises)) ? 0 : Number.parseInt(data.nombre_d_enfants_scolarises) ;
         this.valeurC = Number.isNaN(Number.parseInt(data.nombre_de_chomeurs)) ? 0 : Number.parseInt(data.nombre_de_chomeurs) ;
         this.valeurD = Number.isNaN(Number.parseInt(data.nombre_de_personnes_atteintes)) ? 0 : Number.parseInt(data.nombre_de_personnes_atteintes) ;
    })
    this.valeur_somme = this.valeurA + this.valeurB + this.valeurC + this.valeurD;
    this.updateForm.patchValue({
           somme : this.valeur_somme
    })
}
selectMe(selected:string){
  if(selected == 'un_autre_classement_decide_par_le_comite'){
    this.show = true;

  }
  else{
    this.show = false;
  }
 
}
  showPrint(){
       this.showPrinter = !this.showPrinter;
  }

}