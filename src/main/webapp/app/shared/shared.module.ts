import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnlineShopcleSharedLibsModule, OnlineShopcleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [OnlineShopcleSharedLibsModule, OnlineShopcleSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [OnlineShopcleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlineShopcleSharedModule {
  static forRoot() {
    return {
      ngModule: OnlineShopcleSharedModule
    };
  }
}
