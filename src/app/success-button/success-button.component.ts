import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-button',
  templateUrl: './success-button.component.html',
  styleUrls: ['./success-button.component.css']
})
export class SuccessButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { ButtonComponent } from '../button/button.component';

// @Component({
//   selector: 'app-success-button',
//   templateUrl: '../button/button.component.html',
//   styleUrls: ['./success-button.component.css']
// })
// export class SuccessButtonComponent extends ButtonComponent {

//   constructor() { 
//     super()
//     this.bgColor = "#00FF00"
//     this.text = "Success!"
//   }

//   ngOnInit(): void {
//   }

// }
