import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, NEVER, switchMap } from 'rxjs';
import { PokemonChoose } from 'src/interface-api/pokemon-interface';
import { BookService } from './shared/book.service';
import { useDragImage } from './shared/use-drag-image';
import { Product } from './shopping/model/product';
import { Book } from './test-request/test-request-get/test-request-get';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
//   title = 'my-new-project';
//   ninjaName = 'naruto'

//   ninjaConsole(){
//     console.log("ninja name is ", this.ninjaName)

//   }
//   ninjaChange(name: string){ 
//     this.ninjaName = name;
//   }
    price = 0
    appMinLabel = 'myMinLabel';
    appMaxLabel = 'myMaxLabel';

    squareWidth = 250
    squareHeight = 100


    appCounter = 20

    activate = false

    customerList: string[] = ['customer1', 'customer2', 'customer3', 'customer4']

    value2: string = "Hello Prime ng"

    get productName(){
      return 'apple'
    }
    set productName(value: string){
      console.log(value)
    }


    priceList = [10, 20, 30]

    get sumaryPrice(){
      const sumary = this.priceList.reduce((sum, price) => sum+price, 0)
      return sumary
    }


    products: Product[] = [
      {name: 'Apple', description:"is fruit", price: 20},
      {name: 'Banana', description:"is fruit", price: 40},
      {name: 'Chery', description:"is fruit", price: 30},
      {name: 'Pine apple', description:"is fruit", price: 20},
      {name: 'Apple', description:"is fruit", price: 20},
    ]
    
    filteredproducts: Product[] = this.products;

    bookList = []

    searchProduct(text: string){
      console.log(text)
      this.filteredproducts = this.products.filter(product =>{
        const productname = product.name.toLocaleLowerCase();
        const searchName = text.toLocaleLowerCase();
        console.log(productname+ "="+ searchName)
        return productname.indexOf(searchName) !== -1
      })
      console.log(this.filteredproducts)
    }


    calculate43(value: string){
      this.price = ((Number(value)*3)/4)
    }
    testEventBlind(){
      console.log("test event blind")
    }
    testNumberChange(value:number){
      console.log("test number change : ", value)
    }

    doAppMinChange(value: number){
      console.log("min event change: ", value )
    }
    doAppMaxChange(value: number){
      console.log("max event change: ", value )
    }

    pushMethod(){
      this.customerList.push("customer"+(this.customerList.length+1))
    }
    unshiftCustomer(){
      this.customerList.unshift("customer"+(this.customerList.length+1))
    }
    removeCustomer(value: number){
      this.customerList.splice(value, 1);
    }

    addPrice(val: number){
      this.priceList.push(val);
    }
    constructor(private service:BookService, private http:HttpClient){
      this.service.httpBook().subscribe(val => console.log(val))
      console.log(this.productName)
      this.productName = "Banana"
    }

    // loadBook(event: any){
    //   const inputTextElement:HTMLInputElement = event.target
    //   this.http.get<any>('https://www.anapioficeandfire.com/api/books?name='+inputTextElement.value).subscribe(response=>this.bookList=response)
    // }

    employeeCode = '007';
    employeeName = 'BoppinCode';

    bmi = 0
    info = ''


    weightForm:any = new FormControl(30, Validators.required);
    heightForm:any = new FormControl(1.4, Validators.required);
    calculate(){

      if(this.weightForm.invalid || this.heightForm.invalid){
        return
      }
      const weight = this.weightForm.value
      const height = this.heightForm.value

      this.bmi = weight/(height**2)
    }

    emailForm:any = new FormControl(null, [Validators.email, Validators.required])

    pokemonChooseList: PokemonChoose[] = [
      {
        id: 0,
        pokename: 'pikachu',
        choose: 'Y',
      },
      { id: 1, pokename: 'ditto', choose: 'N' },
      { id: 2, pokename: 'wobbuffet', choose: 'Y' },
      { id: 3, pokename: 'girafarig', choose: 'N' },
      { id: 4, pokename: 'forretress', choose: 'Y' },
    ];
    title = 'angular-pure-pipe';

    @ViewChild('catImage', {read:ElementRef})
    set imageRef(el: ElementRef<HTMLImageElement> | undefined){
      this.imageRef$.next(el)
    }
    get imageRef(){
      return this.imageRef$.value;
    }
    imageRef$ = new BehaviorSubject<ElementRef<HTMLImageElement>| undefined> (undefined)
    // imageRef?: ElementRef<HTMLImageElement>

    smallImage(){
      if(this.imageRef !== undefined){
        const imageElement = this.imageRef.nativeElement;
        imageElement.style.width = '100px'
      }
    }
    mediumImage(){
      if(this.imageRef !== undefined){
        const imageElement = this.imageRef.nativeElement;
        imageElement.style.width = '175px'
      }
    }
    bigImage(){
      if(this.imageRef !== undefined){
        const imageElement = this.imageRef.nativeElement;
        imageElement.style.width = '250px'
      }
    }
    isShowImage = false
    ngOnInit(): void {
      this.imageRef$.pipe(
        switchMap(ref =>{
          if(ref){
            return useDragImage(ref.nativeElement)
          }
          return NEVER
        })
      ).subscribe()
    }
    ngAfterViewInit(): void {
      
    }
  }
