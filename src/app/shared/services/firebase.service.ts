import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users: any;
  sectionsCollection: any;
  profileuser: any;

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('group').doc(userKey).snapshotChanges();
  }
  getSection(secKey){
    return this.db.collection('section').doc(secKey).snapshotChanges();
  }
  getUserByEmail(userKey){
    return this.db.collection('group').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.Username.toLowerCase();
    this.profileuser=JSON.parse(localStorage.getItem("user"));
    value.avatar=this.profileuser.photoURL;
    return this.db.collection('group').doc(userKey).set(value);
  }
  updateSectionValue(secKey, value){
    return this.db.collection('section').doc(secKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('group').doc(userKey).delete();
  }
  deleteSection(Key){
    return this.db.collection('section').doc(Key).delete();
  }

  getUsers(){
    return this.db.collection('group').snapshotChanges();
  }
  getSections(){
    return this.db.collection('section').snapshotChanges();
  }
  searchUsers(searchValue){
    return this.db.collection('group',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('group',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }

  searchUsersSection(value){
    return this.db.collection('/group', ref => ref.where('Section', '==', value)).snapshotChanges();
    
  }

  createUser(value, avatar){
    this.profileuser=JSON.parse(localStorage.getItem("user"));
    return this.db.collection('group').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      email: value.email,
      FirstName:value.FirstName,
      LastName:value.LastName,
      Address:value.Address,
      City:value.City,
      Country: value.Country,
      PostalCode:value.PostalCode,
      Role:value.Role,
      Section:value.Section,
      Company:value.Company,
      avatar:this.profileuser.photoURL
    });
  }


    createSection(value){
      return this.db.collection('section').add({
        no: value.no,
        sub: value.sub
      })

    
  }

 

  updateSection(userKey,value){
    if(value.section==1){
      value.section=2
    }else{
      value.section=1
    }
    return this.db.collection('group').doc(userKey).set(value);
  }


  createSubject(value){
    return this.db.collection('subject').add({
      no: value.no,
      name: value.name,
      assignments:value.assignments
    })
  }
  
  getSubjects(){
    return this.db.collection('subjects').snapshotChanges();
  }
  getNotifications(){
    return this.db.collection('notifications').snapshotChanges();
  }
  
  getAlerts(){
    return this.db.collection('alerts').snapshotChanges();
  }
}
