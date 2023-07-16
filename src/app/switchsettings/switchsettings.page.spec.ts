import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchsettingsPage } from './switchsettings.page';

describe('SwitchsettingsPage', () => {
  let component: SwitchsettingsPage;
  let fixture: ComponentFixture<SwitchsettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SwitchsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
