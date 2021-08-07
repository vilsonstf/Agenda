import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda';

  valor = 0

  nome = ""

  nomes = [''];

  contar(){
    this.valor ++;
  }

  add(){
    this.nomes.push(this.nome);
    this.nome = '';
  }

}
