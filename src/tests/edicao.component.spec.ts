import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoComponent } from '../app/features/admin/edicao/edicao.component';
import { RouterTestingModule } from "@angular/router/testing";

describe(EdicaoComponent.name, () => {
  let component: EdicaoComponent;
  let fixture: ComponentFixture<EdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdicaoComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(EdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
