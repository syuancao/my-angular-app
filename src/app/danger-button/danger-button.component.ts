import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger-button',
  templateUrl: './danger-button.component.html',
  styleUrls: ['./danger-button.component.css']
})
export class DangerButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { ButtonComponent } from '../button/button.component';

// @Component({
//   selector: 'app-danger-button',
//   templateUrl: '../button/button.component.html',
//   styleUrls: ['./danger-button.component.css']
// })
// export class DangerButtonComponent extends ButtonComponent {

//   constructor() {
//     super()
//     this.bgColor = "#FF0000"
//     this.text = "Danger"
//    }

//   ngOnInit(): void {
//   }

// }
