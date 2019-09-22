/**
 * Serviço responsavel por executar as operações da calculadora.
 * 
 * @author Vinicius de Carvalho <vinicius.tecbcc@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CalculadoraService {

  /*
  Define as constantes utilizadas para identificar as operações de calculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string ='/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Metodo que calcula uma operação matematica dado 
   * dois numeros.
   * 
   * Suporta as operações soma, subtração, divisao, e multiplicação.
   * 
   * @param num1 
   * @param num2 
   * @param operacao 
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number; //armazena o resultado da operação.

    switch(operacao){
      case CalculadoraService.SOMA:
      resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
      resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
      resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
      resultado = num1 / num2;
      break;
      default:
      resultado = 0;
    }

    return resultado;
  }
}
