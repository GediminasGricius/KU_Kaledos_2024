import { Component } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goods-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goods-edit.component.html',
  styleUrl: './goods-edit.component.css'
})
export class GoodsEditComponent {
  public id:string;
  public recipient:string|null=null;
  public description:string|null=null;
  public status:string|null=null;
  constructor (private route:ActivatedRoute, private router:Router, private goodsService:GoodsService){
    this.id=this.route.snapshot.params["id"];
    this.goodsService.loadGood(this.id).subscribe( (good)=>{
      this.recipient=good.recipient;
      this.description=good.description;
      this.status=good.status;

    });
  }

  public updateRecord(){
    if (this.recipient!= null && this.description!=null && this.status!=null){
      this.goodsService.updateRecord({
        id:this.id,
        recipient:this.recipient,
        description:this.description,
        status:this.status
      }).subscribe(()=>{
        this.router.navigate([""]);

      });
    }
  }

}
