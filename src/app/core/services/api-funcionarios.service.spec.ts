import { TestBed } from '@angular/core/testing';
import { ApiFuncionariosService } from './api-funcionarios.service';


describe('ApiFuncionariosService', () => {
  let service: ApiFuncionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFuncionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
