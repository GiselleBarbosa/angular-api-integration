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
import { Usuarios } from 'src/app/features/admin/interfaces/usuarios.interface';
import { environment } from 'src/environments/environment';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ApiUsuariosService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  private usuariosSubject = new BehaviorSubject<Usuarios[]>([]);
  public usuarios$ = this.usuariosSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  public error$ = this.errorSubject.asObservable();

  private usuarioCpfSubject = new Subject<Usuarios>();
  public usuarioCpfSubject$ = this.usuarioCpfSubject.asObservable();

  private destroyRef = inject(DestroyRef);

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public listaTodosUsuarios(): void {
    const mensagemErro = 'Falha na requisição. Por favor, tente novamente mais tarde.';

    this.http
      .get<Usuarios[]>(`${this.baseUrl}`, this.httpOptions)
      .pipe(
        tap(usuarios => this.usuariosSubject.next(usuarios)),
        catchError(error => {
          this.errorSubject.next(mensagemErro);
          return throwError(mensagemErro, error);
        }),
        shareReplay(1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public listaUsuarioPorCPF(cpf: string): Observable<Usuarios> {
    const mensagemErro = 'Falha na requisição. Por favor, tente novamente mais tarde.';

    return this.http.get<Usuarios[]>(`${this.baseUrl}?cpf=${cpf}`, this.httpOptions).pipe(
      map(usuarios => {
        if (usuarios.length > 0) {
          return usuarios[0];
        } else {
          throw new Error('Usuário não encontrado');
        }
      }),
      tap(usuario => this.usuarioCpfSubject.next(usuario)),
      catchError(error => {
        this.errorSubject.next(mensagemErro);
        return throwError(mensagemErro, error);
      }),
      shareReplay(1),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public removerUsuario(cpf: string): Observable<void> {
    const errorMessage =
      'Falha ao remover usuário. Por favor, tente novamente mais tarde.';

    // Buscar o usuário pelo CPF para obter o id correspondente
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
          return throwError('Usuário não encontrado');
        }
      }),
      takeUntilDestroyed(this.destroyRef)
    );
  }
}
