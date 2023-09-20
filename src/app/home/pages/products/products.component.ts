import { Component } from '@angular/core';
import { Cardapio } from '../cardapio/cardapio';
import { CardapioservicesService } from 'src/app/services/cardapioservices.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    constructor(private cardapioservice: CardapioservicesService){
      this.getCardapio()
    }


    ngOnInit():void{}

    cardapios: Cardapio[] = [];

    getCardapio():void{
      this.cardapioservice.getAll().subscribe((cardapio) => (this.cardapios = cardapio));
    }



}

