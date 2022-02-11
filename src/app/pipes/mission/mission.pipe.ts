import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MissionService } from 'src/app/services/mission.service';

@Pipe({
  name: 'mission'
})
export class MissionPipe implements PipeTransform {

  constructor(
    private missionService: MissionService
  ) { }

  transform(id: string): Observable<string> {
    return this.missionService.one(id).pipe(map(x => x.name));
  }

}
