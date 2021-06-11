import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    recCollection: AngularFirestoreCollection;

  constructor(
    private af: AngularFirestore,
  ) { 
    this.recCollection = this.af.collection('Receitas');
   }

  //Metodo de consulta todos os dados
getAllReceita(){
  return this.recCollection.snapshotChanges().pipe(
    map (actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data}
      })
    })
  )
}

//Metodo consulta um unico produto
getReceita(id: string){
  return this.recCollection.doc(id).valueChanges();
}

//metodo de cadastro
addReceita(receita){
  return this.recCollection.add(receita);
}

//Metodo que apaga um produto
delReceita(id: string){
  return this.recCollection.doc(id).delete();

}

//Metodo que atualiza um produto
upReceita(id, receita){
  return this.recCollection.doc(id).update(receita)
}

}



