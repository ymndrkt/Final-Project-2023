import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutersPage } from './routers.page';

describe('RoutersPage', () => {
  let component: RoutersPage;
  let fixture: ComponentFixture<RoutersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoutersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
