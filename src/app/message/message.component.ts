
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  title = "Wherever you go, no matter what the weather, always bring your own sunshine."
  instruction = "Leave a Quote below"
  space = " "
  form = new FormGroup({
    input: new FormControl("")
  })

  constructor() {
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.title)
  }


}
