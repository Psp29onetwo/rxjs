import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit{

  ngOnInit(): void {
      const newObservable = new Observable<number>((observer) => {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            observer.next(i);
          }, 1000 * i);
       }
      //  setTimeout(() => {
      //     observer.complete();
      //  }, 1000 * 5);
      })

      let observer = {
        next: (data: number) => console.log(data),
        error: (error: string) => console.log(error),
        complete: () => console.log('new observable complete')
      }

      newObservable.subscribe(observer);
  }
}
