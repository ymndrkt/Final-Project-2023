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
    // Get the password from the password service
    const storedPassword = this.passwordService.getPassword();

    // Validate the username and password
    if (this.username === 'admin' && this.password === storedPassword) {
      // Handle successful login
      console.log('Login successful');
      this.navCtrl.navigateRoot('/home');
    } else {
      // Handle invalid credentials
      console.log('Invalid credentials');
      this.showAlert('The password you entered is incorrect.');
    }
  }
}
