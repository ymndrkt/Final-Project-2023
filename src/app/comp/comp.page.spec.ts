import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompPage } from './comp.page';

describe('CompPage', () => {
  let component: CompPage;
  let fixture: ComponentFixture<CompPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
