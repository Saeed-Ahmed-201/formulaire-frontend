import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit{

  userId : any;
  show = false;
  show2: boolean = false;
  valeur_somme : any = 0;
  valeurA = 0;
  valeurB = 0;
  valeurC = 0;
  valeurD = 0;
  demo: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

  updateItem: any;

  updateForm : FormGroup |  any;


  constructor(private fb:FormBuilder,private httpService:HttpServiceService, private route: ActivatedRoute, private router: Router, private location:Location, private toastr: ToastrService) {
     
  }
 
  ngOnInit(): void {
    this.route.data.subscribe(data => {console.log('form data', data)
           this.updateItem = data.formulaire.result;
           console.log(this.updateItem)           
   });
   this.userId = this.route.snapshot.paramMap.get('id');
   console.log('HERE UPDATE', this.updateItem)
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
      numero_de_carte_d_instructions: new FormControl("",[Validators.required]),
      datenais: new FormControl("",[Validators.required]),
      exploitationHabitation: new FormControl("",[Validators.required]),
      frais_de_soin: new FormControl("",[Validators.required]),
      frais_d_etudes: new FormControl("",[Validators.required]),
      paiement_de_la_consommation_d_eau: new FormControl("",[Validators.required]),
      paiement_de_la_consommation_d_electricite: new FormControl("",[Validators.required]),
      payer_les_frais_de_loyer: new FormControl("",[Validators.required]),
      evaluationDuComite: new FormControl("",[Validators.required]),
  
    }) ;
    

     this.updateForm.patchValue({
      id:this.updateItem.id ,
      age: this.updateItem.age,
      nom: this.updateItem.nom,
      prenom: this.updateItem.prenom,
      num: this.updateItem.num,
      cite: this.updateItem.cite,
      province:this.updateItem.province,
      telephone1: this.updateItem.telephone1,
      telephone2: this.updateItem.telephone2,
      nombre_d_enfant_d_age_prescolaire: this.updateItem.nombre_d_enfant_d_age_prescolaire,
      nombre_d_enfants_scolarises: this.updateItem.nombre_d_enfants_scolarises,
      nombre_de_chomeurs: this.updateItem.nombre_de_chomeurs,
      nombre_de_personnes_atteintes: this.updateItem.nombre_de_personnes_atteintes ,
      somme: this.updateItem.somme ,
      optionalValue2: this.updateItem.optionalValue2,
      etatDeSante: this.updateItem.etatDeSante ,
      etatCivil: this.updateItem.etatCivil,
      parents_ou_ascendants_en_parrainage: this.updateItem.parents_ou_ascendants_en_parrainage ,
      revenuContinental: this.updateItem.revenuContinental ,
      couvertureSociale: this.updateItem.couvertureSociale ,
      numero_de_carte_d_instructions: this.updateItem.numero_de_carte_d_instructions ,
      datenais:this.updateItem.datenais ,
      exploitationHabitation: this.updateItem.exploitationHabitation,
      frais_de_soin: this.updateItem.frais_de_soin == 'true',
      frais_d_etudes: this.updateItem.frais_d_etudes == 'true',
      paiement_de_la_consommation_d_eau: this.updateItem.paiement_de_la_consommation_d_eau == 'true',
      paiement_de_la_consommation_d_electricite: this.updateItem.paiement_de_la_consommation_d_electricite == 'true',
      payer_les_frais_de_loyer: this.updateItem.payer_les_frais_de_loyer == 'true',
      evaluationDuComite:this.updateItem.evaluationDuComite ,
     })

  }



  updateFormValue(){
  }


selectMe(selected:string){
  if(selected == 'وجه إستغلال آخر'){
    this.show = true;

  }
  else{
    this.show = false;
  }
 }
 selectOne(selected:string){
  if(selected == 'un_autre_classement_decide_par_le_comite'){
    this.show2 = true;

  }
  else{
    this.show2 = false;
  }
 }
 onChange(){
  this.updateForm.valueChanges.subscribe((data : any) => {
       this.valeurA = Number.isNaN(Number.parseInt(data.nombre_d_enfant_d_age_prescolaire)) ? 0 : Number.parseInt(data.nombre_d_enfant_d_age_prescolaire) ;
       this.valeurB =  Number.isNaN(Number.parseInt(data.nombre_d_enfants_scolarises)) ? 0 : Number.parseInt(data.nombre_d_enfants_scolarises) ;
       this.valeurC = Number.isNaN(Number.parseInt(data.nombre_de_chomeurs)) ? 0 : Number.parseInt(data.nombre_de_chomeurs) ;
       this.valeurD = Number.isNaN(Number.parseInt(data.nombre_de_personnes_atteintes)) ? 0 : Number.parseInt(data.nombre_de_personnes_atteintes);
  })
  this.valeur_somme = this.valeurA + this.valeurB + this.valeurC + this.valeurD;
  this.updateForm.patchValue({
         somme : this.valeur_somme
  })
 
}
onSubmit(){
  this.toastr.success('Succefully Updated!');
  this.httpService.updateRecord(this.updateForm.value,this.userId).subscribe(response => {
  })
 }
 goBack(){
  this.location.back();
}
}
