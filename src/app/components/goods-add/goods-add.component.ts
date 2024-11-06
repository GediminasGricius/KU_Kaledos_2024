import { Component } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { Good } from '../../models/good';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-goods-add',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './goods-add.component.html',
  styleUrl: './goods-add.component.css'
})
export class GoodsAddComponent {

  public recipient:string|null=null;
  public description:string|null=null;
  public status:string|null=null;

  public isLoading=false;
  public isError=false;
  

  public constructor(private goodsService:GoodsService, private router:Router){

  }

  public addNewGood(){
    
    if (this.description!=null && this.recipient!=null && this.status!=null){
      
      const tmp:Good={
        description:this.description,
        recipient:this.recipient,
        status:this.status,
        id:null
      };
      this.isLoading=true;
      this.goodsService.addGood(tmp).subscribe({
        next:()=>{
          this.isLoading=false;
          this.isError=false;
          this.router.navigate([""]);
        },
        error:()=>{
          this.isError=true;
          this.isLoading=false;
        }
      });
    }
  }

}
