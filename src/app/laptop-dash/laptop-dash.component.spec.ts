import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDashComponent} from './laptop-dash.component';

describe('RestaurentDashComponent', () => {
  let component: LaptopDashComponent;
  let fixture: ComponentFixture<LaptopDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
