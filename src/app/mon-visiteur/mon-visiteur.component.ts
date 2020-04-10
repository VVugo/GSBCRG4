import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-mon-visiteur',
  templateUrl: './mon-visiteur.component.html',
  styleUrls: ['./mon-visiteur.component.css']
})
export class MonVisiteurComponent implements OnInit {

  rapports : any[];
  formAjoutRapport = false;
  formModifierRapport = false;  
  headElements = ['N° Rapport','Date','Motif','Bilan','idV','idM'];

  rapportSubscription: Subscription;

  constructor(private route: Router,
              private mainService: MainService){}

  ngOnInit() {
    this.rapportSubscription = this.mainService.rapportSubject.subscribe(
      (rapports: any[]) => {
        this.rapports = rapports;
      }
    );
    this.mainService.getLesRapports();
    console.log(this.mainService.mesRapports);
      // this.getLesRapports();

  }
  annuler(){
    this.formAjoutRapport = false;
    this.formModifierRapport = false;
  }

  ajouterRapport(){
    this.formAjoutRapport = true;
    this.formModifierRapport = false;
  }
  modifierRapport(){
    this.formModifierRapport = true;
    this.formAjoutRapport = false;
  }

  // getLesRapports(){
  //   // this.rapports = this.mainService.getLesRapports();
  //   this.mainService.getLesRapports();
    
  // }


}
