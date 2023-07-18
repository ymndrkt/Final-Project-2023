import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string;
  password!: string;

constructor(
  private navCtrl: NavController, 
  private alertController: AlertController
  ) {}

  ngOnInit() {
  }
  redirectToHome() {
    this.navCtrl.navigateRoot('/home');
  }
  async login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.navCtrl.navigateForward('/home');
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid credentials',
        buttons: ['try again']
      });
      await alert.present();
    }
  }
}
