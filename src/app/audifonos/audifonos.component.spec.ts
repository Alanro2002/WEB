import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudifonosComponent } from './audifonos.component';

describe('AudifonosComponent', () => {
  let component: AudifonosComponent;
  let fixture: ComponentFixture<AudifonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudifonosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudifonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
