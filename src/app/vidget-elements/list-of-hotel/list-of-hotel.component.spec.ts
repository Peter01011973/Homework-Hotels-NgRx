import { async, ComponentFixture } from '@angular/core/testing';
import { ListOfHotelComponent } from './list-of-hotel.component';
import { TestBed } from '@angular/core/testing';

describe('ListOfHotelComponent', () => {
  let component: ListOfHotelComponent;
  let fixture: ComponentFixture<ListOfHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
