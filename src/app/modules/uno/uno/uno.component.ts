import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  public personaje$!: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.personaje$ = this.activatedRoute.data.pipe(
      tap(console.log)
    );
  }

  ngOnInit(): void {
    // console.log("Component 1");
    // this.activatedRoute.data.subscribe(
    //   {
    //     next: response => {
    //       // console.log("component 1 > ", response);
    //     }
    //   }
    // )
  }

}
