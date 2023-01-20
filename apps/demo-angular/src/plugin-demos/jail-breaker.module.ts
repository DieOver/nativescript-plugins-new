import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { JailBreakerComponent } from './jail-breaker.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: JailBreakerComponent }])],
  declarations: [JailBreakerComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class JailBreakerModule {}
