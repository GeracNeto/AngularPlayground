import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculadorService {
  constructor(private loggerService: LoggerService) { }

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
        this.loggerService.log("non-existent operation");
        return null;
    }
  }
}
