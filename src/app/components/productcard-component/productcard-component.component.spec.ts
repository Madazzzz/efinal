import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcardComponentComponent } from './productcard-component.component';

describe('ProductcardComponentComponent', () => {
  let component: ProductcardComponentComponent;
  let fixture: ComponentFixture<ProductcardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
