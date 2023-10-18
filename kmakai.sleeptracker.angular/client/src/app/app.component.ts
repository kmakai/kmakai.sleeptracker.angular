import { Component } from '@angular/core';
import { Record } from './models/Record';
import { SleepTrackerService } from './services/sleep-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  sleepRecords: Record[] = [];

  constructor(private sleepService: SleepTrackerService) {}

  ngOnInit() {
    this.sleepService.getRecords().subscribe((records) => {
      this.sleepRecords = records;
    });
  }

  getRecords() {
    console.log('getRecords() called', this.sleepRecords);
  }

  onRecordAdded(record: Record) {
    console.log('onRecordAdded() called', record);
    this.sleepRecords.push(record);
  }
}
