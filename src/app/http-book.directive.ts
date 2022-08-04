import { HttpClient } from '@angular/common/http';
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHttpBook]'
})
export class HttpBookDirective {
  @Output() appHttpBook = new EventEmitter()
  constructor(private http:HttpClient) { }
  @HostListener('input', ['$event']) loadbook(event: any){
    const inputTextElement:HTMLInputElement = event.target
      this.http.get<any>('https://www.anapioficeandfire.com/api/books?name='+inputTextElement.value).subscribe(response=>this.appHttpBook.emit(response))
  }
}
