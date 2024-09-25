import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsAddComponent } from './goods-add.component';

describe('GoodsAddComponent', () => {
  let component: GoodsAddComponent;
  let fixture: ComponentFixture<GoodsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
