import { Component, OnDestroy } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <span>Qtd Carrinho: </span>
    <span>{{ qtdProduto$ | async }}</span>
  `,
})
export class CarrinhoComponent {
  public qtdProduto$ = new Observable();

  constructor(public carrinhoService: CarrinhoService) {
    this.qtdProduto$ = carrinhoService.obterQtdCarrinho();
  }
}
