import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular App';
 animal = { name: 'Lion Baby',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4l7iMNcVcI7v93JGmleqayoDySBJL5uU5iA&usqp=CAU' };

 num = 10;
 num2 = 20;

addNum() {
return this.num + this.num2; 
}

onShow(): void {
console.log( 'Event binding Working');
}


}
