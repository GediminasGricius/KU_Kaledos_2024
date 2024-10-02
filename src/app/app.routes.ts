import { Routes } from '@angular/router';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { GoodsAddComponent } from './components/goods-add/goods-add.component';
import { GoodsEditComponent } from './components/goods-edit/goods-edit.component';

export const routes: Routes = [
    {path:"", component:GoodsListComponent},
    {path:"add-goods", component:GoodsAddComponent},
    {path:"good/:id", component:GoodsEditComponent}
];
