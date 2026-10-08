import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estrelas',
  standalone: true,
})
export class EstrelasPipe implements PipeTransform {
  transform(value: number): string {
    return '⭐'.repeat(Math.round(value / 2));
  }
}
