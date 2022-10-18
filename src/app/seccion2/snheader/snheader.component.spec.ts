import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnheaderComponent } from './snheader.component';

describe('SnheaderComponent', () => {
  let component: SnheaderComponent;
  let fixture: ComponentFixture<SnheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
