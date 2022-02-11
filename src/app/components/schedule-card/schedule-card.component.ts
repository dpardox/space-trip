import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/interfaces/schedule.interface';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent implements OnInit {

  @Input() data: Schedule;
  @Input() index: number;

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void { }

  public delete() {
    this.launchService.delete(this.index);
  }

}
