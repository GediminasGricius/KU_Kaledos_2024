import { Component } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { Good } from '../../models/good';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-goods-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './goods-list.component.html',
  styleUrl: './goods-list.component.css'
})
export class GoodsListComponent {

  public goods:Good[]=[];

  private loadData(){
    this.goodsService.loadGoods().subscribe( (data)=>{
      this.goods=[];
      for (let k in data){
       data[k].id=k;
       this.goods.push(data[k]);
      }
      console.log(this.goods);
     });
  }

  public constructor ( private goodsService:GoodsService){
    this.loadData();

  }

  public deleteGood(id:string|null){
    if (id!=null){
      this.goodsService.deleteGood(id).subscribe( ()=>{
        this.loadData();
      });
    }

  }

}
