import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import { Imagen } from '../models/Imagen';
import { Observable, of } from 'rxjs';
import { firebaseConfig } from 'src/environments/firebaseConfig';

const app = firebase.initializeApp(firebaseConfig.firebaseConfig);

@Injectable({
  providedIn: 'root'
})


export class ImagenesService {

  constructor() { }


  subirImagen(file: File, id: string): void {
    let arrayNombre = file.name.split(".");
    //Creo una referencia en el storage
    
    var storageRef = firebase.storage().ref().child(`imagenes/${id}/${arrayNombre[0]}`);
    //Subir el archivo al storage
    storageRef.put(file).then(data => {
      //Creo una referencia en la base de datos
      var databaseRef = firebase.database().ref().child(`imagenes/${id}/${arrayNombre[0]}`)
      storageRef.getDownloadURL().then((url) => {
        //Con la url del storage introduzco datos en la referencia de la base de datos
        databaseRef.set({
          nombre: file.name,
          url: url
        });
      })
    });
  }

  //Eliminar una imagen de un producto determinado
  deleteImage(imagen: Imagen, id: string): void {
    let nombreSinPunto = imagen.nombre.split(".")[0];
    let imagenRef = firebase
      .database()
      .ref()
      .child(`imagenes/${id}/${nombreSinPunto}`);
    let imagenStorageRef = firebase
      .storage()
      .ref()
      .child(`imagenes/${id}/${nombreSinPunto}`);
    imagenRef.remove();
    imagenStorageRef.delete();
  }
  

  getImagen(id: string): Observable<Imagen[]> {
    let imagenes: Imagen[] = [];
    //Creo la referencia al nodo que quiero recuperar
    var imagenPrincipalRef = firebase
      .database()
      .ref()
      .child(`imagenes/${id}`);
    //Recupero la informacion y la asigno al array de imagenes
    imagenPrincipalRef.on("value", (snapshot) => {
      let data = snapshot.val();
      for (var key in data) {
        let imagen = new Imagen();
        imagen.url = data[key].url;
        imagen.nombre = data[key].nombre;
        imagenes.push(imagen);
      }
    });
    return of(imagenes);
  }
}
