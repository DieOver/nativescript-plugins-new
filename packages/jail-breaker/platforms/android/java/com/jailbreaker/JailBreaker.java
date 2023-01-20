package com.jailbreaker;

import android.content.Context;
import com.scottyab.rootbeer.RootBeer;

public class JailBreaker {

  Context context;

  public JailBreaker(Context ctx) {
    this.context = ctx;
  }

  public Boolean isRooted() {
    RootBeer rootBeer = new RootBeer(this.context);
    return rootBeer.isRooted();
  }

}
