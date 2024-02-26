import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  shareReplay,
  Subject,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Funcionarios } from '../interfaces/funcionarios.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiFuncionariosService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;
  private apiBaseUrl = environment.apiBaseUrl;

  private funcionariosSubject = new BehaviorSubject<Funcionarios[]>([]);
  public funcionarios$ = this.funcionariosSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  public error$ = this.errorSubject.asObservable();

  private funcionarioCpfSubject = new Subject<Funcionarios>();
  public funcionarioCpfSubject$ = this.funcionarioCpfSubject.asObservable();

  private destroyRef = inject(DestroyRef);

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public listaTodosFuncionarios(): void {
    const mensagemErro = 'Falha na requisição.';

    this.http
      .get<Funcionarios[]>(`${this.apiBaseUrl}`, this.httpOptions)
      .pipe(
        tap(funcionarios => this.funcionariosSubject.next(funcionarios)),
        catchError(error => {
          this.errorSubject.next(mensagemErro);
          return throwError(mensagemErro, error);
        }),
        shareReplay(1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public listaFuncionarioPorCPF(cpf: string): Observable<Funcionarios> {
    const mensagemErro = 'Falha na requisição.';

    return this.http
      .get<Funcionarios[]>(`${this.baseUrl}?cpf=${cpf}`, this.httpOptions)
      .pipe(
        map(funcionarios => {
          if (funcionarios.length > 0) {
            return funcionarios[0];
          } else {
            throw new Error('Funcionário não encontrado');
          }
        }),
        tap(funcionario => this.funcionarioCpfSubject.next(funcionario)),
        catchError(error => {
          this.errorSubject.next(mensagemErro);
          return throwError(mensagemErro, error);
        }),
        shareReplay(1),
        takeUntilDestroyed(this.destroyRef)
      );
  }

  public removerFuncionario(cpf: string): Observable<void> {
    const errorMessage = 'Falha ao remover funcionário.';

    // Buscar o funcionário pelo CPF para obter o id correspondente
    return this.http.get<any[]>(`${this.baseUrl}?cpf=${cpf}`, this.httpOptions).pipe(
      switchMap(funcionarios => {
        if (funcionarios.length > 0) {
          const id = funcionarios[0].id; // Supondo que o identificador único seja 'id'
          return this.http.delete<void>(`${this.baseUrl}/${id}`, this.httpOptions).pipe(
            catchError(error => {
              this.errorSubject.next(errorMessage);
              return throwError(errorMessage, error);
            })
          );
        } else {
          return throwError('Funcionário não encontrado');
        }
      }),
      takeUntilDestroyed(this.destroyRef)
    );
  }
}
