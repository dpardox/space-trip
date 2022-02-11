import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Schedule } from '../interfaces/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private data: Schedule[] = [
    {
      mission: 'moon',
      start: '2022-02-11',
      end: '2022-03-10',
      humans: 4
    }
  ];

  constructor() { }

  public all(): Observable<Schedule[]> {
    return of(this.data).pipe(delay(500));
  }

  public save(data: Schedule) {
    this.data.push(data);
  }

  public delete(i: number) {
    this.data.splice(i, 1);
  }

}
