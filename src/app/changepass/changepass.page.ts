import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { PasswordService } from '../PassService/pass.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {
  newPassword!: string;
  confirmNewPassword!: string;

  constructor(
    private navCtrl: NavController,
    private passwordService: PasswordService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Password Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  changePassword() {
    
    if (this.newPassword !== this.confirmNewPassword) {
      this.showAlert('New password and confirm password do not match');
      return;
    }

    // Set the new password in the password service
    this.passwordService.setPassword(this.newPassword);

    // Handle successful password change
    console.log('Password changed successfully');
    this.navCtrl.navigateRoot('/home');
  }
}
