import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [PaginatorComponent, TimesDirective],
  imports: [CommonModule],
  exports: [PaginatorComponent],
})
export class SharedModule {}
