import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  itemsArray = [
    {
      productId: 1,
      qnt: 1,
      img: "../../assets/imgs/Peppers.png",
      itemName: "Rainbow Pepper",
      itemPrice: "$10",
      details: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    }
  ];

  inc(product:any){
    // console.log(product.qnt);

    if(product.qnt != 10){

      product.qnt += 1;

    }
  };

  dec(product:any){
    // console.log(product.qnt);
    if(product.qnt != 0){

      product.qnt -= 1;
      
    }
  };

  relatedItems = [
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
    }
  ];

  incr(item:any){
    

    if(item.qnt != 10){

      item.qnt += 1;

    }
  };

  decr(item:any){
    
    if(item.qnt != 0){

      item.qnt -= 1;
      
    }
  };

}

