import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { PasswordService } from '../PassService/pass.service';

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
    private passwordService: PasswordService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
  }

  redirectToHome() {
    this.navCtrl.navigateRoot('/home');
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Invalid Credentials',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  login() {

    const storedPassword = this.passwordService.getPassword();

    if (this.username === 'admin' && this.password === storedPassword) {
      console.log('Login successful');
      this.navCtrl.navigateRoot('/home');

    } else {
      console.log('Invalid credentials');
      this.showAlert('The password or email you provided is incorrect.');
    }
  }
}
