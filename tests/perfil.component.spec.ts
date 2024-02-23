import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponent } from '../src/app/features/funcionarios/perfil/perfil.component';

describe(PerfilComponent.name, () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PerfilComponent]
    });
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
