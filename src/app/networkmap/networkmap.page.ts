import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-networkmap',
  templateUrl: './networkmap.page.html',
  styleUrls: ['./networkmap.page.scss'],
})
export class NetworkmapPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
  
}
