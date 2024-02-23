import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Subscription } from 'rxjs';
import { ApiFuncionariosService } from 'src/app/core/services/api-funcionarios.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    AsyncPipe,
    ReactiveFormsModule,
    RouterLink,
    CurrencyPipe,
  ],
})
export class EdicaoComponent implements OnInit, OnDestroy {
  private ApiFuncionariosService = inject(ApiFuncionariosService);
  private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  public formularioAtualizacao!: FormGroup;

  public cpf!: string;

  private subcription!: Subscription;

  public ngOnInit(): void {
    this.inicializarFormulario();

    this.receberCpfDaRota();

    this.popularDadosFuncionariosSelecionado();
  }

  private receberCpfDaRota(): void {
    this.subcription = this.route.paramMap.subscribe(params => {
      const cpfRouta = params.get('cpf')!;
      this.cpf = cpfRouta;
    });
  }

  public inicializarFormulario(): void {
    this.formularioAtualizacao = this.formBuilder.group({
      cpf: [null],
      nome: [null],
      data_nascimento: [null],
      telefone: [null],
      email: [null],
      departamento_id: [null],
      em_atividade: [null],
    });
  }

  public popularDadosFuncionariosSelecionado(): void {
    this.subcription = this.ApiFuncionariosService.listaFuncionarioPorCPF(
      this.cpf
    ).subscribe(funcionario => {
      console.log(funcionario);
      this.formularioAtualizacao.patchValue({
        cpf: funcionario.cpf,
        nome: funcionario.nome,
        data_nascimento: funcionario.data_nascimento,
        telefone: funcionario.telefone,
        email: funcionario.email,
        departamento_id: funcionario.departamento_id,
        em_atividade: funcionario.em_atividade,
      });
    });
  }

  public atualizarDados(): void {
    const dadosDoFormulario = this.formularioAtualizacao.getRawValue();

    if (this.formularioAtualizacao.valid) {
      console.log('enviar dados', dadosDoFormulario);
    }
  }

  public ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
