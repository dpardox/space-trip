import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { add, format } from 'date-fns';
import { Pattern } from 'src/app/enums/pattern';
import { LaunchService } from 'src/app/services/launch.service';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  templateUrl: './flight.page.html',
  styleUrls: ['./flight.page.scss']
})
export class FlightPage implements OnInit {

  public form: FormGroup;
  public missions$ = this.missionSevice.all();
  public schedules$ = this.launchService.all();

  constructor(
    private el: ElementRef,
    private formBuilder: FormBuilder,
    private launchService: LaunchService,
    private missionSevice: MissionService
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  get mission() { return this.form.get('mission'); }
  get start() { return this.form.get('start'); }
  get end() { return this.form.get('end'); }
  get humans() { return this.form.get('humans'); }

  private buildForm() {
    return this.formBuilder.group({
      mission: ['earth', [Validators.required]],
      start: [format(add(new Date(), { days: 1 }), 'yyyy-MM-dd'), [Validators.required]],
      end: [format(add(new Date(), { days: 7 }), 'yyyy-MM-dd'), [Validators.required]],
      humans: [1, [Validators.required, Validators.minLength(1), Validators.maxLength(20), Validators.pattern(Pattern.number)]]
    });
  }

  public submit() {
    if (this.form.valid) {
      console.log('Serialize:', this.form.value);
      this.launchService.save(this.form.value);
    } else {
      this.el.nativeElement.querySelector('form .ng-invalid').scrollIntoView({block: 'center', behavior: 'smooth'});
    }
  }

}
