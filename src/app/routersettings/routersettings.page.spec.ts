import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutersettingsPage } from './routersettings.page';

describe('RoutersettingsPage', () => {
  let component: RoutersettingsPage;
  let fixture: ComponentFixture<RoutersettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoutersettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
