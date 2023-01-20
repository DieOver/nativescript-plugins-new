import { DemoSharedBase } from '../utils';
import { JailBreaker } from '@dieover/jail-breaker';

export class DemoSharedJailBreaker extends DemoSharedBase {
  isRooted(): boolean {
    return JailBreaker.isRooted();
  }
}
