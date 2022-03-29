import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-shopproduct',
  templateUrl: './shopproduct.component.html',
  styleUrls: ['./shopproduct.component.scss']
})
export class ShopproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  



  itemsArray = [
    {
      productId: 1,
      qnt: 1,
      img: "../../assets/imgs/Peppers.png",
      itemName: "Pepper",
      itemPrice: "$10"
    },
    {
      productId: 2,
      qnt: 1,
      img: "../../assets/imgs/oring.webp",
      itemName: "Clementine",
      itemPrice: "$12"
    },
    {
      productId: 3,
      qnt: 1,
      img: "../../assets/imgs/product.webp",
      itemName: "Yogurt",
      itemPrice: "$10"
    },
    {
      productId: 4,
      qnt: 1,
      img: "../../assets/imgs/product2.webp",
      itemName: "Product Name",
      itemPrice: "$10"
    },
    {
      productId: 5,
      qnt: 1,
      img: "../../assets/imgs/Strawberrie.webp",
      itemName: "Strawberrie",
      itemPrice: "$13"
    },
    {
      productId: 6,
      qnt: 1,
      img: "../../assets/imgs/oring.webp",
      itemName: "Clementine",
      itemPrice: "$13"
    }
  ];

  inc(item:any){
    // console.log(product.qnt);

    if(item.qnt != 10){

      item.qnt += 1;

    }
  };

  dec(item:any){
    // console.log(product.qnt);
    if(item.qnt != 0){

      item.qnt -= 1;
      
    }
  };

}
