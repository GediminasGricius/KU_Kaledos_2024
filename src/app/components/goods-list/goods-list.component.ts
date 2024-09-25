import { Component } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { Good } from '../../models/good';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goods-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goods-list.component.html',
  styleUrl: './goods-list.component.css'
})
export class GoodsListComponent {

  public goods:Good[]=[];

  public constructor ( private goodsService:GoodsService){
    this.goodsService.loadGoods().subscribe( (data)=>{
     for (let k in data){
      this.goods.push(data[k]);
     }
    });

  }

}
