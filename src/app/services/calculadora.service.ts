import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadorService {
  constructor() {}

  calculate(num1: number, num2: number, operation: string) {
    switch (operation) {
      case 'sum':
        return num1 + num2;
      case 'sub':
        return num1 - num2;
      case 'div':
        return num1 / num2;
      case 'mult':
        return num1 * num2;
      default:
        return null;
    }
  }
}
