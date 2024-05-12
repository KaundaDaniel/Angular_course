import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {


  deleteMessage(index: number) {
    this.messages.splice(index, 1)
}

  nome:string="";
  email:string="";
  message:string="";

  messages:Array<any>=[]
  isSubmitted:boolean=false;

  onSubmit(){
    this.isSubmitted=true

this.messages.push(
  {'nome':this.nome,
    'email':this.email,
    'message':this.message
  }
);
console.log(this.messages);


this.email='';
this.nome='';
this.message='';
  }

}
