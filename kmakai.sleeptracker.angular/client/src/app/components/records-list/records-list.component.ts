import { Component, Input } from '@angular/core';
import { Record } from 'src/app/models/Record';
import { SleepTrackerService } from 'src/app/services/sleep-tracker.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css'],
})
export class RecordsListComponent {
  @Input() records: Record[] = [];

  constructor(private sleepService: SleepTrackerService) {}

  deleteRecord(record: Record) {
    this.sleepService.deleteRecord(record.id).subscribe(() => {
      this.records = this.records.filter((r) => r.id !== record.id);
    });
  }
}
