import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, RouterLink, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  public formularioLogin!: FormGroup;

  public ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(6),
          Validators.minLength(6),
        ]),
      ],
    });
  }

  public enviaFormulario(): void {
    const dadosDoFormulario = this.formularioLogin.getRawValue();

    if (
      this.formularioLogin.valid &&
      this.formularioLogin.get('email')?.value === 'admin@email.com'
    ) {
      this.router.navigate(['/administrador/lista-funcionarios']);
      console.log(dadosDoFormulario);
    } else if (this.formularioLogin.valid) {
      this.router.navigate(['/funcionarios/funcionario-perfil']);
      console.log(dadosDoFormulario);
    }
  }
}
