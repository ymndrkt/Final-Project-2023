import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-networkmapsetting',
  templateUrl: './networkmapsetting.page.html',
  styleUrls: ['./networkmapsetting.page.scss'],
  /*standalone: true,
  imports: [CdkDrag],*/
})
export class NetworkmapsettingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
}


 



