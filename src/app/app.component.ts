import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';
  loading = false;

  constructor(private router: Router) {
    // router.events.subscribe(e => console.debug('router event', e));

    router.events.pipe(
      filter(e => e instanceof NavigationStart
        || e instanceof NavigationEnd
        || e instanceof NavigationError
        || e instanceof NavigationCancel
      ))
      .subscribe(e => {

        if (e instanceof NavigationStart) {
          this.loading = true;
        }
        else {
          this.loading = false;
        }
      });

  }

}
