import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'rxjs';

  postArray = [
    {title: 'name1', description: 'desc1'},
    {title: 'name2', description: 'desc2'},
    {title: 'name3', description: 'desc3'},
  ]

  postArrayObservable$ = from(this.postArray);

  constructor(){
    this.postArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    })
  }
  ngAfterViewInit(): void {
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete click') // This will never complete as we can click many times on a tag.
    })
  }
}
