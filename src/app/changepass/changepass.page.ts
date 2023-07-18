import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  redirectToHome() {
    this.navCtrl.navigateRoot('/home');
  }
  goBack() {
    this.navCtrl.back();
  }
}
