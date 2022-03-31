import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  public text: string = 'hello';
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  productArray = [
    {
      productId: 1,
      img:"../../assets/imgs/oring.webp",
      productName: "Orange",
      amount: "$10",
      qnt: 0
    },
    {
      productId: 2,
      img:"../../assets/imgs/Peppers.png",
      productName: "Peppers",
      amount: "$10",
      qnt:0
    },
    {
      productId: 3,
      img:"../../assets/imgs/product.webp",
      productName: "Yougurt",
      amount: "$10",
      qnt: 0
    },
    {
      productId: 4,
      img:"../../assets/imgs/product2.webp",
      productName: "Product",
      amount: "$10",
      qnt: 0
    }
  ];

  inc(product:any){
    // console.log(product.qnt);

    if(product.qnt != 10){

      product.qnt += 1;

    }
    
  }

  dec(product:any){
    // console.log(product.qnt);
    if(product.qnt != 0){

      product.qnt -= 1;
      
    }
    
  };

  itemsCart:any = [];

  addCart(category:any){
    // console.log(catagory);

    let cartDataNull= localStorage.getItem('localCart');

    if (cartDataNull == null){

      let storeDataGet:any = [];

      storeDataGet.push(category);

      localStorage.setItem('localCart', JSON.stringify(storeDataGet));

    } else {

      var id = category.productId;

      let index:number = -1;

      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}');

      for (let i=0; i<this.itemsCart.length; i++){
        if (parseInt(id) === parseInt(this.itemsCart[i].productId)){

          this.itemsCart[i].qnt = category.qnt;

          index = i;

          break;

        }
      }
      if(index == -1){
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }else{
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }

    }

    localStorage.setItem('localCart', JSON.stringify(category));
  };
}
