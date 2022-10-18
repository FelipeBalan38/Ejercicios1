import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SncontenidoComponent } from './sncontenido.component';

describe('SncontenidoComponent', () => {
  let component: SncontenidoComponent;
  let fixture: ComponentFixture<SncontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SncontenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SncontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
