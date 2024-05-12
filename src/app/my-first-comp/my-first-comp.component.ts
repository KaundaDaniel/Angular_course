import { Component } from '@angular/core';
import { MyFirstServiceService } from '../services/my-first-service.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {




  deleteMessage(index: number) {
    this.service.deleteMessage(index)
}

  nome:string="";
  email:string="";
  message:string="";
  isSubmitted:boolean=false;

  messages:Array<any>=[]
  constructor( private service: MyFirstServiceService){
    this.messages= this.service.getAllMessage();
    this.isSubmitted= this.messages.length>0;

  }


  onSubmit(){
    this.isSubmitted=true

  this.service.insert(
    {
    'nome':this.nome,
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
