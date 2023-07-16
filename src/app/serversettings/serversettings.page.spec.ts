import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServersettingsPage } from './serversettings.page';

describe('ServersettingsPage', () => {
  let component: ServersettingsPage;
  let fixture: ComponentFixture<ServersettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServersettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
