import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  redirectToReports() {
    this.navCtrl.navigateRoot('/reports');
  }
  redirectToNetwork() {
    this.navCtrl.navigateRoot('/home');
  }
  redirectToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
  redirectToCompSettings() {
    this.navCtrl.navigateRoot('/compsettings');
  }
  redirectToRouterSettings() {
    this.navCtrl.navigateRoot('/routersettings');
  }
  redirectToSwitchSettings() {
    this.navCtrl.navigateRoot('/switchsettings');
  }
  redirectToServerSettings() {
    this.navCtrl.navigateRoot('/serversettings');
  }
  redirectToNetworkMapSettings() {
    this.navCtrl.navigateRoot('/networkmapsetting');
  }
  redirectToChangePass() {
    this.navCtrl.navigateRoot('/changepass');
  }
}
