import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
  selector: 'create-session', // this is going to inject the page into <create-session></create-session>
  templateUrl: './create-session.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5; }
  `]
})

export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('',
     [
      Validators.required,
      Validators.maxLength(200),
      restrictedWords(['foo', 'bar'])
     ]
    );

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues) {
    // console.log(formValues);
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    // console.log(session);
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

}
