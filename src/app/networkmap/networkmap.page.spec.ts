import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetworkmapPage } from './networkmap.page';

describe('NetworkmapPage', () => {
  let component: NetworkmapPage;
  let fixture: ComponentFixture<NetworkmapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NetworkmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
