import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutletName',
})
export class TrimOutletNamePipe implements PipeTransform {
  transform(title: string, outlet: string): string {
    return title.replace(` - ${outlet}`, '');
  }
}
