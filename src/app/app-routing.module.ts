import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'networkmap',
    loadChildren: () => import('./networkmap/networkmap.module').then( m => m.NetworkmapPageModule)
  },
  {
    path: 'comp',
    loadChildren: () => import('./comp/comp.module').then( m => m.CompPageModule)
  },
  {
    path: 'routers',
    loadChildren: () => import('./routers/routers.module').then( m => m.RoutersPageModule)
  },
  {
    path: 'switches',
    loadChildren: () => import('./switches/switches.module').then( m => m.SwitchesPageModule)
  },
  {
    path: 'servers',
    loadChildren: () => import('./servers/servers.module').then( m => m.ServersPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'compsettings',
    loadChildren: () => import('./compsettings/compsettings.module').then( m => m.CompsettingsPageModule)
  },
  {
    path: 'routersettings',
    loadChildren: () => import('./routersettings/routersettings.module').then( m => m.RoutersettingsPageModule)
  },
  {
    path: 'switchsettings',
    loadChildren: () => import('./switchsettings/switchsettings.module').then( m => m.SwitchsettingsPageModule)
  },
  {
    path: 'serversettings',
    loadChildren: () => import('./serversettings/serversettings.module').then( m => m.ServersettingsPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'networkmapsetting',
    loadChildren: () => import('./networkmapsetting/networkmapsetting.module').then( m => m.NetworkmapsettingPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
