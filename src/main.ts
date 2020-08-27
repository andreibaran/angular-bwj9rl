import './polyfills';

import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/task-tracking';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;


  const ngZone = ref.injector.get(NgZone);
    setInterval(() => {
      const taskTrackingZone = (ngZone as any)._inner.getZoneWith('TaskTrackingZone');
      if (!taskTrackingZone) {
        throw new Error(`'TaskTrackingZone' zone not found! Have you loaded 'node_modules/zone.js/dist/task-tracking.js'?`);
      }

      let tasks: any[] = taskTrackingZone._properties.TaskTrackingZone.getTasksFor('macroTask');
      tasks = [...tasks];
      if (tasks.length > 0) {
        console.log('ZONE pending tasks=', tasks);
      }
    }, 1000);

  // Otherwise, log the boot error
}).catch(err => console.error(err));