import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  inputProduct = '';

  private timer = new Promise<string>((resolver) => {
    setTimeout(() => {
      resolver('RESOLVIDO');
    }, 5000);
  });

  private timer$ = new Observable<string>((sub) => {
    setTimeout(() => {
      sub.next('RESOLVIDO');
    }, 5000);
  });

  ngOnInit(): void {
    this.timer.then((value) => console.log('value: ', value));
    this.timer$.subscribe((value) => console.log('value: ', value));
  }

  addProduct() {}
}
