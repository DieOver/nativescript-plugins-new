import { Observable } from '@nativescript/core';

export class JailBreakerCommon extends Observable {
  public static isRooted(): boolean {
    return false;
  }
}
