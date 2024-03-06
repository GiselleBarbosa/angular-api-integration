import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from '../app/features/funcionarios/cadastro/cadastro.component';

describe(CadastroComponent.name, () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CadastroComponent]
    });
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
