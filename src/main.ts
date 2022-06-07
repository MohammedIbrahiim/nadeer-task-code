import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense("pk.eyJ1IjoibS16ZXpvIiwiYSI6ImNsMHo2ODdnYTFyZTQzamx6ZGI4ZnJ4Mm0ifQ.hEeUrUnv6BLqhNVHhnIx_A")
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
