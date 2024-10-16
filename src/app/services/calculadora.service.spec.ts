import { TestBed } from '@angular/core/testing';

import { CalculadorService } from './calculadora.service';
import { LoggerService } from './logger.service';

describe('CalculadoraService', () => {
  let service: CalculadorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])

    TestBed.configureTestingModule({
      providers: [
        CalculadorService,
        {
          provide: LoggerService,
          useValue: loggerSpy,
        },
      ],
    });
    service = TestBed.inject(CalculadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sum two numbers', () => {
    expect(service).toBeTruthy();

    const result = service.calculate(5, 8, 'sum');

    expect(result).toBe(13, 'expected result should be 13');
  });

  it('should sub two numbers', () => {
    expect(service).toBeTruthy();

    const result = service.calculate(10, 2, 'sub');

    expect(result).toBe(8, 'expected result should be 8');
  });

  it('should div two numbers', () => {
    expect(service).toBeTruthy();

    const result = service.calculate(100, 50, 'div');

    expect(result).toBe(2, 'expected result should be 2');
  });

  it('should mult two numbers', () => {
    expect(service).toBeTruthy();

    const result = service.calculate(5, 5, 'mult');

    expect(result).toBe(25, 'expected result should be 25');
  });

  it('non-existent operation', () => {
    expect(service).toBeTruthy();

    const result = service.calculate(5, 5, 'n/a');

    expect(result).toBeNull();

    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  });
});
