import { Component } from '@angular/core';
import { CardapioservicesService } from 'src/app/services/cardapioservices.service';
import { Cardapio } from './cardapio';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {

  constructor(private cardapioservice: CardapioservicesService){
    this.getCardapio()
  }

  ng0nInit():void{}

  cardapio: Cardapio[] = [];

  getCardapio():void{
    this.cardapioservice.getAll().subscribe((cardapio) => (this.cardapio = cardapio));
  }
}
