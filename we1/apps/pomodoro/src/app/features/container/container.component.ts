import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'we1-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  countdownState$ = new BehaviorSubject('STOP');
  onPlay(): void {
    this.countdownState$.next('PLAY');
  }
  onPause(): void {
    this.countdownState$.next('PAUSE');
  }
  onStop(): void {
    this.countdownState$.next('STOP');
  }
}
