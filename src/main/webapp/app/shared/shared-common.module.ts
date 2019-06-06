import { NgModule } from '@angular/core';

import { OnlineShopcleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [OnlineShopcleSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [OnlineShopcleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class OnlineShopcleSharedCommonModule {}
