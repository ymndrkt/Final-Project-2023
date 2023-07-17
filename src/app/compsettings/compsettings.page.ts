import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-compsettings',
  templateUrl: './compsettings.page.html',
  styleUrls: ['./compsettings.page.scss'],
})
export class CompsettingsPage implements OnInit {
  deviceName!: string;
  deviceType!: string;
  macAddress!: string;
  ipAddress!: string;
  building!: string;
  floor!: string;
  devices: any[] = [];
  selectedDevices: any[] = [];

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }

  addDevice() {
    const newDevice = {
      deviceName: this.deviceName,
      deviceType: this.deviceType,
      macAddress: this.macAddress,
      ipAddress: this.ipAddress,
      building: this.building,
      floor: this.floor,
    };

    this.devices.push(newDevice);

    this.deviceName = '';
    this.deviceType = '';
    this.macAddress = '';
    this.ipAddress = '';
    this.building = '';
    this.floor = '';
  }

  async deleteDevice(device: any) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete ${device.deviceName}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.performDelete(device);
          },
        },
      ],
    });

    await alert.present();
  }

  performDelete(device: any) {
    const index = this.devices.indexOf(device);
    if (index > -1) {
      this.devices.splice(index, 1);
    }

    const selectedIndex = this.selectedDevices.indexOf(device);
    if (selectedIndex > -1) {
      this.selectedDevices.splice(selectedIndex, 1);
    }
  }

  deleteSelectedDevices() {
    for (const device of this.selectedDevices) {
      const index = this.devices.indexOf(device);
      if (index > -1) {
        this.devices.splice(index, 1);
      }
    }
    this.selectedDevices = [];
  }

  selectDevice(device: any) {
    if (this.isSelected(device)) {
      this.selectedDevices = this.selectedDevices.filter((d) => d !== device);
    } else {
      this.selectedDevices.push(device);
    }
  }

  isSelected(device: any) {
    return this.selectedDevices.includes(device);
  }
}
