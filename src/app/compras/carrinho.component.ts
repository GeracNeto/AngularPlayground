import { Component } from '@angular/core';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  template: `
    <span>Qtd Carrinho: </span>
    <span>{{carrinhoService.carrinhoQtd}}</span>
  `,
})
export class CarrinhoComponent {
  constructor(public carrinhoService: CarrinhoService) {}
}
