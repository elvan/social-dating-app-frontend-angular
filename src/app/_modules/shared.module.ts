import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TimeagoModule } from 'ngx-timeago';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    CommonModule,
    FileUploadModule,
    ModalModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'line-scale-party' }),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TimeagoModule.forRoot(),
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
  ],
  exports: [
    BsDatepickerModule,
    BsDropdownModule,
    ButtonsModule,
    FileUploadModule,
    ModalModule,
    NgxSpinnerModule,
    PaginationModule,
    TabsModule,
    TimeagoModule,
    ToastrModule,
  ],
})
export class SharedModule {}
