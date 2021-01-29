import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, interval, Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'we1-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  @Input() countdownState$: Observable<'PLAY' | 'STOP' | 'PAUSE'>;
  @Input() totalDuration: number;
  timeLeft: number;
  stopCountdown$ = new Subject();
  countdown$ = new Subject();

  countdownActions = {
    PLAY: () => this.startCountdown(this.timeLeft ?? this.totalDuration),
    PAUSE: () => this.pauseCountdown(),
    STOP: () => this.stopCountdown(),
  };
  ngOnInit(): void {
    this.countdownState$
      .pipe(
        switchMap((countdownState) => this.countdownActions[countdownState]())
      )
      .subscribe();
  }

  startCountdown(duration: number): Observable<number> {
    return interval(1000).pipe(
      map((timerValue) => {
        const delta = duration - timerValue;
        this.countdown$.next(delta);
        this.timeLeft = delta;
        return delta;
      }),
      takeUntil(this.stopCountdown$)
    );
  }

  pauseCountdown(): Observable<never> {
    this.stopCountdown$.next(true);
    return EMPTY;
  }

  stopCountdown(): Observable<never> {
    this.stopCountdown$.next(true);
    this.timeLeft = undefined;
    this.countdown$.next(this.totalDuration);
    return EMPTY;
  }
}
