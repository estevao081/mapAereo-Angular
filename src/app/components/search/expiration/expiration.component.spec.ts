import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirationComponent } from './expiration.component';

describe('ExpirationComponent', () => {
  let component: ExpirationComponent;
  let fixture: ComponentFixture<ExpirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpirationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
