import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarCpf',
  standalone: true,
})
export class OcultarCpfPipe implements PipeTransform {
  public transform(value: string): string {
    // Verifica se o valor é válido
    if (!value) return '';

    // Verifica se o valor tem pelo menos 3 caracteres (3 primeiros dígitos do CPF)
    if (value.length < 3) return value;

    // Mantém os primeiros 3 dígitos e oculta o restante
    const parteVisivel = value.substring(0, 3);
    const parteOculta = '*'.repeat(value.length - 3); // Oculta todos os dígitos restantes

    // Retorna a parte visível seguida por '*' para o restante dos dígitos
    return `${parteVisivel}${parteOculta}`;
  }
}
