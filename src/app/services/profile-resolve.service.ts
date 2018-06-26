import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Profile } from '../models/profile';
import { ProfileService } from './profile.service';
import { catchError } from 'rxjs/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolveService {

  constructor(
    private profilesService: ProfileService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.profilesService.getProfile(route.params['username']).pipe(catchError((err)=>this.router.navigateByUrl('/')));
  }
}
