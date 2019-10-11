import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWeatherVidgetComponent } from './hot-weather-vidget.component';

describe('HotWeatherVidgetComponent', () => {
  let component: HotWeatherVidgetComponent;
  let fixture: ComponentFixture<HotWeatherVidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWeatherVidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWeatherVidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
