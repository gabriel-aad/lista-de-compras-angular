# Lista de Compras em Angular

Exercício de aplicação em **Angular** que implementa um sistema de **lista de compras personalizada**, com foco no gerenciamento temporário de itens e no cálculo rápido de preço.

---

##  Tecnologias utilizadas

- **Angular CLI** (versão 20.0.1)
- **TypeScript**, **HTML**, **SCSS**  

---

## Funcionalidades 

1. Adição de itens na lista de compras;
2. Limpeza da lista de compras;
3. Marcação de itens como comprados;
4. Persistência simples (via localStorage);
5. Apresentação do valor unitário, valor total (pela quantidade do item) e valor final da compra.

---

## Instalação

### Pré-requisitos

- **Angular CLI** (versão 20.0.1, recomendado instalar globalmente com `npm install -g @angular/cli`)

### Passos

```bash
git clone https://github.com/gabriel-aad/lista-de-compras-angular.git
cd lista-de-compras-angular
npm install
ng serve
