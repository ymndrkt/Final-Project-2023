import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompsettingsPage } from './compsettings.page';

describe('CompsettingsPage', () => {
  let component: CompsettingsPage;
  let fixture: ComponentFixture<CompsettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
