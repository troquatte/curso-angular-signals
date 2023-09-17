import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoItemComponent } from './novo-item.component';

describe('NovoItemComponent', () => {
  let component: NovoItemComponent;
  let fixture: ComponentFixture<NovoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoItemComponent]
    });
    fixture = TestBed.createComponent(NovoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
