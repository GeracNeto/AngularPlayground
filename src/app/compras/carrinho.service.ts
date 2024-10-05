import { Injectable } from '@angular/core';
import { Compra } from './compra.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: Compra[] = [];
  private produtoAdicionado$ = new BehaviorSubject<number>(0);

  adicionarProduto(produto: string) {
    const produtoCompra: Compra = {
      produto: produto,
      id: this.carrinho.length + 1,
    };

    this.carrinho.push(produtoCompra);

    this.produtoAdicionado$.next(this.carrinho.length);
  }

  obterQtdCarrinho() {
    return this.produtoAdicionado$.asObservable();
  }
}
