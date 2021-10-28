import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../services/http-service.service';
import { AuthenticationService } from '../../auth/authentication.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-formulaire',
  templateUrl: './add-formulaire.component.html',
  styleUrls: ['./add-formulaire.component.css']
})
export class AddFormulaireComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private httpService: HttpServiceService, private authService: AuthenticationService,private toastr: ToastrService, private sharedService: SharedService) { 

  }


  public formulaireForm : FormGroup | any;
  unamePattern = "^[a-z]{8,15}$";


  valeur_somme : any = 0;
  valeurA = 0;
  valeurB = 0;
  valeurC = 0;
  valeurD = 0;
  demo: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
  show = false;
  show2: boolean = false;
  //   counter(i:number){
  //   return new Array(i);
  // }


  ngOnInit(): void {
    this.formulaireForm = new FormGroup({
      date:new FormControl ('', [Validators.required]),
      numero_de_carte_d_instructions: new FormControl('',[Validators.required]),
      prenom: new FormControl('',  [Validators.required]),
      nom: new FormControl('',  [Validators.required, Validators.pattern(/[A-Z]/)]),
      datenais: new FormControl('',  [Validators.required]),
      age: new FormControl(0,[Validators.required]),
      province: new FormControl('',[Validators.required]),
      cite: new FormControl('',[Validators.required]),
      num: new FormControl('',[Validators.required]),
      telephone1: new FormControl("",[Validators.required]),
      telephone2:new FormControl("", [Validators.required]),
      nombre_d_enfant_d_age_prescolaire:new FormControl("",[Validators.required]),
      nombre_d_enfants_scolarises:new FormControl("",[Validators.required]),
      nombre_de_chomeurs:new FormControl("",[Validators.required]),
      nombre_de_personnes_atteintes: new FormControl("",[Validators.required]),
      somme: new FormControl("",[Validators.required]),
      couvertureSociale: new FormControl("",[Validators.required]),
      optionalValue: new FormControl("",[Validators.required]),
      optionalValue2: new FormControl("",[Validators.required]),
      frais_de_soin: new FormControl("",[Validators.required]),
      frais_d_etudes: new FormControl("",[Validators.required]),
      paiement_de_la_consommation_d_eau: new FormControl("",[Validators.required]),
      paiement_de_la_consommation_d_electricite: new FormControl("",[Validators.required]),
      payer_les_frais_de_loyer: new FormControl("",[Validators.required]),
      exploitationHabitation: new FormControl("",[Validators.required]),
      etatCivil:new FormControl("", [Validators.required]),
      etatDeSante:new FormControl("",[Validators.required]),
      parents_ou_ascendants_en_parrainage:new FormControl("",[Validators.required]),
      revenuContinental:new FormControl("",[Validators.required]),
      evaluationDuComite:new FormControl("",[Validators.required])
    })
  }

  onChange(){
    this.formulaireForm.valueChanges.subscribe((data : any) => {
         this.valeurA = Number.isNaN(Number.parseInt(data.nombre_d_enfant_d_age_prescolaire)) ? 0 : Number.parseInt(data.nombre_d_enfant_d_age_prescolaire) ;
         this.valeurB =  Number.isNaN(Number.parseInt(data.nombre_d_enfants_scolarises)) ? 0 : Number.parseInt(data.nombre_d_enfants_scolarises) ;
         this.valeurC = Number.isNaN(Number.parseInt(data.nombre_de_chomeurs)) ? 0 : Number.parseInt(data.nombre_de_chomeurs) ;
         this.valeurD = Number.isNaN(Number.parseInt(data.nombre_de_personnes_atteintes)) ? 0 : Number.parseInt(data.nombre_de_personnes_atteintes);
    })
    this.valeur_somme = this.valeurA + this.valeurB + this.valeurC + this.valeurD;
    this.formulaireForm.patchValue({
           somme : this.valeur_somme
    })
    // console.log('sum of values: ',this.sum);
    // alert('here');
    // this.valueA = this.formulaireForm.get('test').value;
    //   console.log(this.formulaireForm.get('test').value, this.formulaireForm.get('test2').value, this.formulaireForm.get('test2'), this.formulaireForm.get('test'));
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

  onSubmit(){
    let currentUser = this.authService.currentUserValue;
    const role = currentUser.roles[0];
    if(role == "USER"){
      this.httpService.addNewRecord(this.formulaireForm.value,currentUser.id).subscribe(response => {
        if(currentUser.roles[0] == "USER"){
          this.authService.isFormulareAdded.next(true);

          localStorage.removeItem('hasFormulaired');
          localStorage.setItem('hasFormulaired', "true");
          
          this.route.navigate(['user/dashboard/view-my-record']);
        }
      })
    }
    else{
      const userId = this.activatedRoute.snapshot.paramMap.get("id");
      this.httpService.addNewRecord(this.formulaireForm.value,userId).subscribe(response => {
        if(currentUser.roles[0] == "ADMIN"){
          this.toastr.success(response.result);
          this.route.navigate(['admin']);
        }
      })
    }
  }



}
