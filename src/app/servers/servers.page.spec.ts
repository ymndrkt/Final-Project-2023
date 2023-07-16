import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServersPage } from './servers.page';

describe('ServersPage', () => {
  let component: ServersPage;
  let fixture: ComponentFixture<ServersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
