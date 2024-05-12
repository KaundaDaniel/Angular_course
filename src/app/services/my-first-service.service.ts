import { Injectable } from '@angular/core';
import { StringLiteralType } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {

  constructor() {
    this.init();
  }

  init(){
    this.insert({
      nome:'Kaunda da Gama',
      email:'danny@gmail.com',
      message:'Ola Mundo'
    }
    );
    this.insert({
      nome:'Paulo da Gama',
      email:'paulo@gmail.com',
      message:'Ola Paulo'
    }
    );
    this.insert({
      nome:'Carlos Almeida',
      email:'almeida@gmail.com',
      message:'Ola Carlos'
    }
    );
  }


  messages:Array<any>=[];
  insert(message:{nome:string, email:string, message:string}): void{
    this.messages.push(message)
  }

  getAllMessage():any[]{
    return this.messages
  }

  deleteMessage(index:number):void{
    this.messages.splice(index, 1)
  }
}
