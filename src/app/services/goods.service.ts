import { Injectable } from '@angular/core';
import { Good } from '../models/good';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http:HttpClient) { }

  public addGood(item:Good){
    return this.http.post("https://kaledos2024-e4d4f-default-rtdb.europe-west1.firebasedatabase.app/goods.json", item);
  }

  public loadGoods(){
    return this.http.get<{[key:string]:Good}>("https://kaledos2024-e4d4f-default-rtdb.europe-west1.firebasedatabase.app/goods.json");
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

}
