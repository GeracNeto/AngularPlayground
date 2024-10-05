import { Injectable } from '@angular/core';
import { Compra } from './compra.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: Compra[] = [];
  private produtoAdicionado$ = new Subject<number>();

  adicionarProduto(produto: string) {
    const produtoCompra: Compra = {
      produto: produto,
      id: this.carrinho.length + 1,
    };

    this.carrinho.push(produtoCompra);

    this.produtoAdicionado$.next(this.carrinho.length);
  }

  obterQtdCarrinho(){
    return this.produtoAdicionado$.asObservable();
  }
}
