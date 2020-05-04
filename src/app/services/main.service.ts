import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class MainService{
    medecinSubject = new Subject<any[]>();
     medecins : any[];

    constructor(private httpClient: HttpClient){}


    emitmedecinSubject(){
        this.medecinSubject.next(this.medecins.slice());
    }

    // Récupère un médecin en fonction de son nom
    getmedecinFromServer(nom){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?noms='+nom).subscribe(
            (reponse) => {
                this.medecins = (reponse);
                this.emitmedecinSubject();
            }
        )
    }

    // // Ajoute un rapport avec les informations passés en paramètres
    // ajoutRapport(date,motif,bilan,idVisiteur,idMedecin) {
    //     return new Promise((resolve, reject) => {
    //         this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?ajoutRapport='+date+"&"+motif+"&"+bilan+"&"+idVisiteur+"&"+idMedecin).subscribe();
    //         resolve("L'ajout dans la base de donnée à bien fonctionné");
    //     });
    // }
}