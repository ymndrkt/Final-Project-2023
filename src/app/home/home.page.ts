import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  ngOnInit() {
  }
  redirectToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
  redirectToNetworkMap() {
    this.navCtrl.navigateRoot('/networkmap');
  }
  redirectToComp() {
    this.navCtrl.navigateRoot('/comp');
  }
  redirectToRouter() {
    this.navCtrl.navigateRoot('/routers');
  }
    redirectToSwitch() {
    this.navCtrl.navigateRoot('/switches');
    }
    redirectToServer() {
    this.navCtrl.navigateRoot('/servers');
  }
    redirectToReports() {
    this.navCtrl.navigateRoot('/reports');
  }
    redirectToSettings() {
    this.navCtrl.navigateRoot('/settings');
  }
}
