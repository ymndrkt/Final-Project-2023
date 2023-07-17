import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-routersettings',
  templateUrl: './routersettings.page.html',
  styleUrls: ['./routersettings.page.scss'],
})
export class RoutersettingsPage implements OnInit {
  deviceName!: string;
  macAddress!: string;
  ipAddress!: string;
  building!: string;
  floor!: string;
  devices: any[] = [];
  selectedDevices: any[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
  addDevice() {
    const newDevice = {
      deviceName: this.deviceName,
      macAddress: this.macAddress,
      ipAddress: this.ipAddress,
      building: this.building,
      floor: this.floor,
    };
    this.devices.push(newDevice);

    // Clear input fields
    this.deviceName = '';
    this.macAddress = '';
    this.ipAddress = '';
    this.building = '';
    this.floor = '';
  }
  deleteDevice(device: any) {
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
