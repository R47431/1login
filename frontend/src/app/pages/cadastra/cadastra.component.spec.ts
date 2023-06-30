import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraComponent } from './cadastra.component';

describe('CadastraComponent', () => {
  let component: CadastraComponent;
  let fixture: ComponentFixture<CadastraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastraComponent]
    });
    fixture = TestBed.createComponent(CadastraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
