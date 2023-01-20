import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedJailBreaker } from '@demo/shared';
import {} from '@dieover/jail-breaker';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedJailBreaker {}
