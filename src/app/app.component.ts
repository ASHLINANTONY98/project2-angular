import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';


  value=10;

  items = [
    { image: 'assets/img1.png' },
    { image: 'assets/img2.png' },
    { image: 'assets/img3.png' },
    { image: 'assets/img4.png' },
    { image: 'assets/img5.png' },
    { image: 'assets/img6.png' }
  ];
}
