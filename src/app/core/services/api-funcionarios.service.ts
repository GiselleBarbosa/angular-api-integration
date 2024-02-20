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

  private funcionariosSubject = new BehaviorSubject<Funcionarios[]>([]);
  public usuarios$ = this.funcionariosSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  public error$ = this.errorSubject.asObservable();

  private funcionarioCpfSubject = new Subject<Funcionarios>();
  public funcionarioCpfSubject$ = this.funcionarioCpfSubject.asObservable();

  private destroyRef = inject(DestroyRef);

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public listaTodosUsuarios(): void {
    const mensagemErro = 'Falha na requisição.';

    this.http
      .get<Funcionarios[]>(`${this.baseUrl}`, this.httpOptions)
      .pipe(
        tap(usuarios => this.funcionariosSubject.next(usuarios)),
        catchError(error => {
          this.errorSubject.next(mensagemErro);
          return throwError(mensagemErro, error);
        }),
        shareReplay(1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public listaUsuarioPorCPF(cpf: string): Observable<Funcionarios> {
    const mensagemErro = 'Falha na requisição.';

    return this.http
      .get<Funcionarios[]>(`${this.baseUrl}?cpf=${cpf}`, this.httpOptions)
      .pipe(
        map(usuarios => {
          if (usuarios.length > 0) {
            return usuarios[0];
          } else {
            throw new Error('Funcionário não encontrado');
          }
        }),
        tap(usuario => this.funcionarioCpfSubject.next(usuario)),
        catchError(error => {
          this.errorSubject.next(mensagemErro);
          return throwError(mensagemErro, error);
        }),
        shareReplay(1),
        takeUntilDestroyed(this.destroyRef)
      );
  }

  public removerUsuario(cpf: string): Observable<void> {
    const errorMessage = 'Falha ao remover funcionário.';

    // Buscar o funcionário pelo CPF para obter o id correspondente
    return this.http.get<any[]>(`${this.baseUrl}?cpf=${cpf}`, this.httpOptions).pipe(
      switchMap(usuarios => {
        if (usuarios.length > 0) {
          const id = usuarios[0].id; // Supondo que o identificador único seja 'id'
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
