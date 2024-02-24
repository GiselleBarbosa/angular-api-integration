import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoComponent } from '../app/features/admin/edicao/edicao.component';

describe(EdicaoComponent.name, () => {
  let component: EdicaoComponent;
  let fixture: ComponentFixture<EdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdicaoComponent]
    });
    fixture = TestBed.createComponent(EdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
