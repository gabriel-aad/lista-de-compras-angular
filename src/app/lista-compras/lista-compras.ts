import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ItemLista } from './item-lista';


@Component({
  selector: 'app-lista-compras',
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  item: string = '';
  preco: number = 0;
  quantidade: number = 1;
  lista: ItemLista[] = [];
  precoTotalLista: number = this.getTotal();
  
  public adicionarItem(): void{
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.preco = this.preco;
    itemLista.quantidade = this.quantidade;
    itemLista.id = this.lista.length + 1;
    
    if (this.item.trim() === '') {
      window.alert('Por favor, digite o nome do item.');
      return;
    }
    if (this.preco <= 0) {
      window.alert('Por favor, insira um preço válido.');
      return;
    }
    if (this.quantidade <= 0) {
      window.alert('Por favor, insira uma quantidade válida.');
      return;
    }
    this.lista.push(itemLista);
    this.item = '';
  }
  
  public riscarItem(itemLista: ItemLista): void{
    itemLista.comprado = !itemLista.comprado;
  }
  
  public getTotal(): number {
    return this.lista.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }
  
  public limparLista(): void {
    this.lista = [];
    this.item = '';
  }
}
