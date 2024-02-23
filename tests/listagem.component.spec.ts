import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemComponent } from '../src/app/features/admin/listagem/listagem.component';

describe(ListagemComponent.name, () => {
  let component: ListagemComponent;
  let fixture: ComponentFixture<ListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListagemComponent],
    });
    fixture = TestBed.createComponent(ListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
