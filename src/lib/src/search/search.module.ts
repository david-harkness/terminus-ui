import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TsInputMessagesModule } from './../input-messages/input-messages.module';
import { TsInputModule } from './../input/input.module';
import { TsButtonModule } from './../button/button.module';

import { TsSearchComponent } from './search.component';
export { TsSearchComponent } from './search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsInputMessagesModule,
    TsInputModule,
    TsButtonModule,
  ],
  exports: [
    TsSearchComponent,
  ],
  declarations: [
    TsSearchComponent,
  ],
})
export class TsSearchModule {}
