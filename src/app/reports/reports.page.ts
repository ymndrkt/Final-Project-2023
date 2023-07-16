import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  redirectToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
  redirectToNetwork() {
    this.navCtrl.navigateRoot('/home');
  }
  redirectToSettings() {
    this.navCtrl.navigateRoot('/settings');
  }
}
