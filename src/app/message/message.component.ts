
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from './../app.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector    : 'app-message',
  templateUrl : './message.component.html',
  styleUrls   : ['./message.component.css']
})

export class MessageComponent implements OnInit {
  title = " "     
  //title = "Wherever you go, no matter what the weather, always bring your own sunshine."
  form = new FormGroup({
    input: new FormControl("")
  })

  constructor(public http:HttpClient) {
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.http.get("/api/db",{responseType:"text"}).subscribe(data => {
      console.log(data)
      this.title=data
    }) 
    console.log(this.title)
  }

  onSubmit() {
    //get request with this given endpoint
    //.subscribe : after getting the request, you do the console thing
    //data refers to the json 
    //const res  = this.http.get<any>("/api/test").subscribe(data => {console.log(data.dog);});
    const header = {"Content-Type":"application/json"};
    const body = JSON.stringify({quote:this.title}) //transform from string to object
    const res1 = this.http.post("/api/db",body,{"headers":header, responseType:"text"})
                  .subscribe(data => {console.log(data);})
    //alert(this.title)
  }
  


}
