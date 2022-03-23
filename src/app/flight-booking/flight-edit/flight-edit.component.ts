// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { ComponentWithExitWarning } from 'src/app/shared/exit/exit.guard';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit, ComponentWithExitWarning {
  id = 0;
  showDetails = false;
  showWarning = false;

  observer: Observer<boolean> | undefined;

  flight!: Flight;

  constructor(private route: ActivatedRoute) { }

  decide(decision: boolean): void {
    if (!this.observer) {
      return;
    }

    this.showWarning = false;
    this.observer.next(decision);
    this.observer.complete();
  }

  canExit(): Observable<boolean> {
    this.showWarning = true;
    return new Observable(observer => {

      this.observer = observer;

    });
  }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.flight = data.flight;
    });

    this.route.params.subscribe((p) => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });
  }
}
