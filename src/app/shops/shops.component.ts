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
      productName: "Yougurt",
      amount: "$10",
      qnt: 1
    },
    {
      productId: 2,
      img:"../../assets/imgs/Peppers.png",
      productName: "Yougurt",
      amount: "$10",
      qnt:1
    },
    {
      productId: 3,
      img:"../../assets/imgs/product.webp",
      productName: "Yougurt",
      amount: "$10",
      qnt: 1
    },
    {
      productId: 4,
      img:"../../assets/imgs/product2.webp",
      productName: "Yougurt",
      amount: "$10",
      qnt: 1
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

  addCart(catagory:any){
    // console.log(catagory);

    localStorage.setItem('localCart', JSON.stringify(catagory));
  };
}
