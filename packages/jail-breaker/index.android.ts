import { JailBreakerCommon } from './common';
import { Utils } from '@nativescript/core';

declare const com: any;

export class JailBreaker extends JailBreakerCommon {
  public static isRooted(): boolean {
    const rootBeer = new com.jailbreaker.JailBreaker(Utils.android.getApplicationContext());
    return rootBeer.isRooted();
  }
}
