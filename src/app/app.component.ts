import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  name: string = 'Foad';
  isEnabled: boolean = true;

  public onInputChanged(e: Event) {
    console.log(e)
    this.name = (<HTMLInputElement>e.target).value
  }


}
