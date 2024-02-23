import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from '../src/app/features/autenticacao/logout/logout.component';

describe(LogoutComponent.name, () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogoutComponent]
    });
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
