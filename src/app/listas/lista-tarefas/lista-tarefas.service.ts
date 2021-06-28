
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ListaTarefasServices {
  constructor(private firestore: AngularFirestore) {}

  getLista() {
    return this.firestore
    .collection('listas')
    .valueChanges({ idField: 'id'});
  }

  getItensListas<Itenslistas>(id: string){
    return this.firestore.collection('listas').doc(id).valueChanges();
  }


}
