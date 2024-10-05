import { Component, OnDestroy } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  template: `
    <span>Qtd Carrinho: </span>
    <span>{{ qtdProduto }}</span>
  `,
})
export class CarrinhoComponent implements OnDestroy {
  public qtdProduto = 0;

  private sub = new Subscription();

  constructor(public carrinhoService: CarrinhoService) {
    const subContador = carrinhoService
      .obterQtdCarrinho()
      .subscribe((qtd) => (this.qtdProduto = qtd));

    this.sub.add(subContador);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
