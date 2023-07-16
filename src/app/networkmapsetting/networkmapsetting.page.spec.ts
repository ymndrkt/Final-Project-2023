import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetworkmapsettingPage } from './networkmapsetting.page';

describe('NetworkmapsettingPage', () => {
  let component: NetworkmapsettingPage;
  let fixture: ComponentFixture<NetworkmapsettingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NetworkmapsettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
