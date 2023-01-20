# @dieover/jail-breaker

```javascript
npm install @dieover/jail-breaker
```

## Usage
This plugins use a rootbeer lib 0.1.0 of scottyab for Android to check if the Android is Rooted and for iOS always return false

```
import { JailBreaker } from '@dieover/jail-breaker';

...

isRooted(): void {
  if (JailBreaker.isRooted()) {
    // it's Rooted
  } else {
    // it's not Rooted
  }
}
```

## License

Apache License Version 2.0
