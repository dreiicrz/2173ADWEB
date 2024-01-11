import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'This is interpolated';
clientName = 'Matti';
appliedCSS = 'green';
notAppliedCSS = false;
myColor = 'yellow';

clickCount=0
clickMe() {
this.clickCount++;
}

//event binding
showData($event: any) {
console.log('Button is clicked!');
if($event) {
console.log($event.target);
console.log($event.target.value);
}
}
}