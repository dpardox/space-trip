import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Mission } from '../interfaces/mission.interface';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private data: Mission[] = [
    { id: 'earth', name: 'EARTH ORBIT' },
    { id: 'iss', name: 'SPACE STATION' },
    { id: 'moon', name: 'MOON' },
    { id: 'mars', name: 'MARS & BEYOND' }
  ];

  constructor() { }

  public all(): Observable<Mission[]> {
    return of(this.data).pipe(delay(1000));
  }

  public one(id: string): Observable<Mission> {
    const mission: Mission = { id: '', name: '' }
    return of(this.data.find(x => x.id === id) ?? mission);
  }

}
