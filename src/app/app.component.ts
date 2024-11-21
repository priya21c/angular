import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profile';
  name: string = 'Mohan Doss B';
  profession: string = 'B.Com Auditor';
  role: string = 'Partner';
  phone: string = '+91 8270734385';
  email: string = 'deenadeena335@outlook.com';
  address: string = 'NO.37/19,1st Floor, Bajanai Kovil Street, Choolaimedu, Chennai, Tamil Nadu-600 094';
  // profileImage: string = '../assets/image/image1.jpeg';  // Assuming
}
