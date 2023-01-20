import { Component, NgZone } from '@angular/core';
import { JailBreaker } from '@dieover/jail-breaker';

@Component({
  selector: 'demo-jail-breaker',
  templateUrl: 'jail-breaker.component.html',
})
export class JailBreakerComponent {
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {}

  isRooted(): void {
    console.log('isRooted', JailBreaker.isRooted());
  }
}
