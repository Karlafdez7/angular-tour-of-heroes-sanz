import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  searchValue: string =''; // searchValue es una propiedad que almacenará el valor del campo de entrada
  @Output() searchValueChanged = new EventEmitter<string>();
  //@Output() searchValueChanged es una instancia de EventEmitter, que se utilizará para emitir eventos cuando el valor de búsqueda cambie.

  // Se utiliza principalmente para establecer la comunicación entre componentes, permitiendo que los componentes envíen y reciban datos entre sí. 
  //Esta clase está diseñada para implementar el patrón de diseño "Observer" o "Observable", donde un objeto (el emisor) notifica a otros objetos (los observadores) 
  //cuando ocurre algún cambio.

  //En el contexto de Angular, EventEmitter se utiliza principalmente con la directiva @Output para crear propiedades que emiten eventos desde un componente hijo 
  //hacia su componente padre. El componente padre puede suscribirse a estos eventos y reaccionar en consecuencia.

  onSearchValueChange(){
    this.searchValueChanged.emit(this.searchValue);
  }

  //Este método se llama cuando el valor del campo de entrada cambia. Cuando se llama a este método, se emite un evento a través de searchValueChanged.emit() y se pasa el valor actual del campo de entrada (this.searchValue) como argumento al evento.
}
