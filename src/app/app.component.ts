/**
 * Pour déclarer une classe comme composant de notre application, on importe "component"
 * via @angular/core
 */
import {Component} from '@angular/core';

/**
 * c'est ce qu'on appelle un décorateur
 * Il va nous permettr de donner des renseignements
 * sur nos composants
 */
@Component({
  /**
   *  Le sélecteur est l'ID, l'identifiant unique du composant
   *  au sein de l'application
   */
  selector: 'app-root',
  /**
   * C'est la partie visible de notre composant.
   * C'est ce qui s'affiche à notre utilisateur
   */
  templateUrl: './app.component.html',
  /**
   * Déclarer les styles CSS spacifique a ce composant
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant
 * Dans notre architecture MVVM, notre classe correspond au Model
 */
export class AppComponent {
  // -- Déclaration d'une variable / propriété (lien entre model et vue!)
  title = ' Gestion des Contact';
  contactProfil = ''; // ou null
  // -- Déclaration d'un objet contact
  unContact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    email: 'hugo@biyn.media',
    tel: '07 83 97 15 15'
  };

  // -- Tableau de Contact
  mesContacts = [
    {
    id: 1,
    name: 'Hugo LIEGEARD',
    email: 'hugo@biyn.media',
    tel: '07 83 97 15 15'
    },
    {
      id: 2,
      name: 'Vanessa DEHECQ',
      email: 'vanessa.dehecq@gmail.com',
      tel: '07 83 97 22 22'
    },
    {
      id: 3,
      name: 'Manon DERYDT',
      email: 'manon.derydt@gmail.com',
      tel: '07 83 97 33 33'
    },
    {
      id: 4,
      name: 'Olga KORDIAK',
      email: 'olga.kordiak@gmail.com',
      tel: '07 83 97 44 44'
    },
  ];

  /**
   * Permet d'afficher les informations
   * d'un objet Contact
   */
  displayContact(contactCliqueParMonUtilisateur): void {
    console.log(contactCliqueParMonUtilisateur);
    this.contactProfil = contactCliqueParMonUtilisateur;
  }
}
