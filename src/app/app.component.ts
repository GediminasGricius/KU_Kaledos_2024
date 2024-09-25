import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoodsAddComponent } from "./components/goods-add/goods-add.component";
import { GoodsListComponent } from "./components/goods-list/goods-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoodsAddComponent, GoodsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaledos2024';
}
