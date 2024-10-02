import { Component } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { Good } from '../../models/good';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './goods-add.component.html',
  styleUrl: './goods-add.component.css'
})
export class GoodsAddComponent {

  public recipient:string|null=null;
  public description:string|null=null;
  public status:string|null=null;

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

      this.goodsService.addGood(tmp).subscribe(()=>{
        this.router.navigate([""]);
      });
    }
  }

}
