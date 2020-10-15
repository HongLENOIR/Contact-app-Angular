import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  @Output() newContactEvent = new EventEmitter();
  // on déclare un nouvel objet vide
  nouveauContact = {
    name: null,
    email: null,
    tel: null
  };

  // -- On déclare un nouvel objet vide
  nouveauContact = {};
  constructor() { }

  ngOnInit(): void {
  }

  /**
   *  Cette fonction se déclenche à la soumission du formulaire.
   */
  submitContact(): void {
    // console.log( this.nouveauContact);
    this.newContactEvent.emit(this.nouveauContact);

    /**
     * On réinitialise notre nouveau contact
     * après la soumission
     */
    this.nouveauContact = {
      name: null,
      email: null,
      tel: null
    };

  }
}
