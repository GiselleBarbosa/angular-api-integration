import { TestBed } from '@angular/core/testing';
import { ApiFuncionariosService } from 'src/app/core/services/api-funcionarios.service';


describe(ApiFuncionariosService.name, () => {
  let service: ApiFuncionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFuncionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${ApiFuncionariosService.prototype.listaTodosFuncionarios.name} 
  Deve retornar a lista com todos os funcionarios`, () => {
    const lista = service.listaTodosFuncionarios();
    expect(lista).toBeTrue();
  });
});
