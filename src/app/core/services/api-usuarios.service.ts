import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, first, of, tap, throwError } from 'rxjs';
import { Usuarios } from 'src/app/features/admin/interfaces/usuarios.interface';
import { environment } from 'src/environments/environment';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ApiUsuariosService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;
  private destroyRef = inject(DestroyRef);

  private _usuariosSubject = new BehaviorSubject<Usuarios[]>([]);
  public usuarios$ = this._usuariosSubject.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public listaTodosUsuarios(): void {
    this.http
      .get<Usuarios[]>(`${this.baseUrl}`, this.httpOptions)
      .pipe(
        catchError(err => {
          of([]);
          return throwError(() => {
            throwError(err);
          });
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(usuarios => this._usuariosSubject.next(usuarios));
  }
}
