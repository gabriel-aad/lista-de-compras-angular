import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaCompras } from "./lista-compras/lista-compras";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaCompras],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'conceitos-basicos';
}
