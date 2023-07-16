import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-compsettings',
  templateUrl: './compsettings.page.html',
  styleUrls: ['./compsettings.page.scss'],
})
export class CompsettingsPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
}

