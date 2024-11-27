import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSocailComponent } from './header-socail.component';

describe('HeaderSocailComponent', () => {
  let component: HeaderSocailComponent;
  let fixture: ComponentFixture<HeaderSocailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSocailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSocailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
