import { Injectable } from '@angular/core';
import { Compra } from './compra.model';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: Compra[] = [];

  get carrinhoQtd(){
    return this.carrinho.length;
  }

  adicionarProduto(produto: string) {
    this.carrinho.push({
      produto: produto,
      id: this.carrinho.length + 1,
    });
  }
}
