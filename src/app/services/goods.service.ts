import { EventEmitter, Injectable } from '@angular/core';
import { Good } from '../models/good';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  private goods:Good[]=[];

  public onGoodsCountChange=new EventEmitter();

  constructor(private http:HttpClient) { }

  public addGood(item:Good){
    return this.http.post("https://kaledos2024-e4d4f-default-rtdb.europe-west1.firebasedatabase.app/goods.json", item);
  }

  public loadGoods(){
    return this.http
      .get<{[key:string]:Good}>("https://kaledos2024-e4d4f-default-rtdb.europe-west1.firebasedatabase.app/goods.json")
      .pipe(
        map((data):Good[]=>{
          const goods=[];
          for (let k in data){
           data[k].id=k;
           goods.push(data[k]);
          }
          return goods;
        }),
        tap((data)=>{
          this.goods=data;
          this.onGoodsCountChange.emit();
        })

      )
  }

  public loadGood(id:string){
    return this.http.get<Good>("https://kaledos2024-e4d4f-default-rtdb.europe-west1.firebasedatabase.app/goods/"+id+".json");
  }
  public updateRecord(item:Good){
    return this.http.patch("https://kaledos2024-e4d4f-default-rtdb.europe-west1.firebasedatabase.app/goods/"+item.id+".json", item);
  }

  public deleteGood(id:string){
    return this.http.delete("https://kaledos2024-e4d4f-default-rtdb.europe-west1.firebasedatabase.app/goods/"+id+".json");
  }

  public getCount(){
    return this.goods.length;
  }

}
