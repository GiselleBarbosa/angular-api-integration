/* tslint:disable:no-unused-variable */

import { OcultarCpfPipe } from '../app/core/pipes/ocultar-cpf/ocultar-cpf.pipe';

describe(OcultarCpfPipe.name, () => {
  it('create an instance', () => {
    const pipe = new OcultarCpfPipe();
    expect(pipe).toBeTruthy();
  });
});
