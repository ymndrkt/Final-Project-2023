import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-routersettings',
  templateUrl: './routersettings.page.html',
  styleUrls: ['./routersettings.page.scss'],
})
export class RoutersettingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
}
