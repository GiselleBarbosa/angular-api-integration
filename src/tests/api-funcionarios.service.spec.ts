import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { takeUntil } from 'rxjs/operators';
import { ApiFuncionariosService } from 'src/app/core/services/api-funcionarios.service';
import { RouterTestingModule } from "@angular/router/testing";

describe(ApiFuncionariosService.name, () => {
  let service: ApiFuncionariosService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule ], 
      providers: [ApiFuncionariosService], 
    });
    service = TestBed.inject(ApiFuncionariosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); 
  });

  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Deve listar todos os funcionarios', () => {
    const mockFuncionarios = [{
      nome: 'Funcionario 1',
      telefone: '123456789',
      email: 'funcionario1@example.com',
      cpf: '12345678900',
      senha: 'password123',
      dataNascimento: new Date('1990-01-01'),
      salario: '1000',
      emAtividade: true,
      departamentoId: 1,
      role: 'user'
    }];

    service.listaTodosFuncionarios();
    service.funcionarios$.pipe(takeUntil(service.funcionarioCpfSubject$)).subscribe(funcionarios => {
      expect(funcionarios).toEqual(mockFuncionarios);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/funcionarios');
    expect(req.request.method).toEqual('GET');
    req.flush(mockFuncionarios);
  });

  it('Deve tratar o erro quando ele ocorrer', () => {
    const errorMessage = 'Falha na requisição.';

    service.listaTodosFuncionarios();
    service.error$.subscribe(error => {
      expect(error).toBe(errorMessage);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/funcionarios');
    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent('networkError'));
  });
});
