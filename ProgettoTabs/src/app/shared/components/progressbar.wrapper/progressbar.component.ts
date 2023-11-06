import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: 'progressbar.html',
})
export class ProgressBar implements OnInit, OnChanges {
  @Input() value: number = 0;
  barColor: string = '';
  constructor() {}
  ngOnInit(): void {
    this.setBarColor(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.value /= 10;
    this.setBarColor(this.value);
  }

  setBarColor(value: number) {
    if (value < 0.5) {
      this.barColor = 'danger';
    } else if (value >= 0.5 && value < 0.8) {
      this.barColor = 'warning';
    } else {
      this.barColor = 'primary';
    }
  }
}
