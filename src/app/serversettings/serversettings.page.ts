import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-serversettings',
  templateUrl: './serversettings.page.html',
  styleUrls: ['./serversettings.page.scss'],
})
export class ServersettingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
}
