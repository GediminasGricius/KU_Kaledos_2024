import { Component } from '@angular/core';
import { GoodsService } from '../../services/goods.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public count=0;

  constructor(private goodsService:GoodsService){
    this.goodsService.onGoodsCountChange.subscribe(()=>{
      this.count=this.goodsService.getCount();
    });
    


  }

}
