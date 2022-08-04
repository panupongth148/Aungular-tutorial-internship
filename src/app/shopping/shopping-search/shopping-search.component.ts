import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { auditTime, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  styleUrls: ['./shopping-search.component.scss']
})
export class ShoppingSearchComponent implements OnInit {
  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(auditTime(400))
  constructor() { }

  ngOnInit(): void {
  }
  inputSearch(text: string){
    this.onInput.emit(text)
  }
}
