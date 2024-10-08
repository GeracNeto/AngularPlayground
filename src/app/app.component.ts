import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CarrinhoComponent } from './compras/carrinho.component';
import { CarrinhoService } from './compras/carrinho.service';
import { MusicComponent } from './music/music.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CarrinhoComponent, MusicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  inputProduct = '';
  mostrarContador = true;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void { }

  addProduct() {
    this.carrinhoService.adicionarProduto(this.inputProduct);

    this.inputProduct = '';
  }
}
