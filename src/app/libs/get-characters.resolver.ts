import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { catchError, concat, concatMap, Observable, of, tap } from 'rxjs';
import { UnoService } from '../services/uno.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersResolver implements Resolve<any> {
  public id!: string;

  constructor(private unoService: UnoService, private router: Router){
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
  //   const name: string = route.queryParams['name'];

  //   console.log("resolver > ", route);
  //   console.log("resolver > ", state);

  //   return this.unoService.getCharacters().pipe(
  //     tap((response) => {
  //       let names = response.results.map((item:any) => {return item.name})
  //       if(!names.includes(name)){
  //         this.router.navigate(["404"])
  //       }
  //     }),
  //     concatMap((response: any) => {
  //       return this.unoService.getCharacter(name);
  //     }),
  //     catchError((error) => {
  //       if(error.status === 404){
  //         this.router.navigate(["404"])
  //       }
  //       console.log(error);
  //       return error
  //     })

  //   );
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const name: string = route.queryParams['name'];

    return this.unoService.getCharacters().pipe(
      concatMap((response: any) => {
        console.log(response);
        let temp = (response.results as any[]).find((item) => {
          return item.name.includes(name)
        })?.name
        console.log(temp);
        if(!temp){
          throw {
            status: 404
          };
        }
        return this.unoService.getCharacter(temp);
      }),
      catchError((error) => {
        if(error.status === 404){
          this.router.navigate(["404"])
        }
        console.log(error);
        return of(error)
      })
    );
  }
}
