import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme } from './theme';

describe('Theme', () => {
  let component: Theme;
  let fixture: ComponentFixture<Theme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Theme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Theme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
