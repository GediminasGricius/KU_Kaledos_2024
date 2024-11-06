import { Component } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { Good } from '../../models/good';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-goods-list',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent],
  templateUrl: './goods-list.component.html',
  styleUrl: './goods-list.component.css'
})
export class GoodsListComponent {

  public goods:Good[]=[];
  public isLoading=false;
  public isError=false;

  private loadData(){
    this.isLoading=true;
    this.goodsService.loadGoods().subscribe( {
      next:(data)=>{
        this.goods=data;
        this.isLoading=false;
        this.isError=false;
       },
       error:(data)=>{
        this.isError=true;
        this.isLoading=false;
       }
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
