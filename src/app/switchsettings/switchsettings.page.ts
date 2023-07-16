import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-switchsettings',
  templateUrl: './switchsettings.page.html',
  styleUrls: ['./switchsettings.page.scss'],
})
export class SwitchsettingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
}
