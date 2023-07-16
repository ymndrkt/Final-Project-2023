import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchesPage } from './switches.page';

describe('SwitchesPage', () => {
  let component: SwitchesPage;
  let fixture: ComponentFixture<SwitchesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SwitchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
