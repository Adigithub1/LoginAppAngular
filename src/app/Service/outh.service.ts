import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

import { resolve, reject } from '../../../node_modules/@types/q';


@Injectable()
export class OuthService {

  constructor(public afAuth: AngularFireAuth) { }


  CreateUser(email: string, pass: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise(( resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass )
      .then( userData => resolve(userData), err => reject (err));
    });
}

  signOut() {
    // return this.afAuth.auth.signOut();
    return this.afAuth.auth.signOut();

  }

  LogIn(email: string, pass: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise(( resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass )
      .then( userData => resolve(userData), err => reject (err));
    });
}

getAuth() {
  return this.afAuth.authState.map (auth => auth);
}


}
