import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsEditComponent } from './goods-edit.component';

describe('GoodsEditComponent', () => {
  let component: GoodsEditComponent;
  let fixture: ComponentFixture<GoodsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
