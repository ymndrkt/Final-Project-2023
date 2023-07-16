import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangepassPage } from './changepass.page';

describe('ChangepassPage', () => {
  let component: ChangepassPage;
  let fixture: ComponentFixture<ChangepassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangepassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
