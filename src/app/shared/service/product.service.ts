import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsArr:Array<Iproduct> = [
    {
      id: "1",
      name: 'iPhone 13',
      brand: 'Apple',
      price: 78999,
      offerprice:56788,
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQanLRVNaU-P0vaqd8saJsEMGkbwf4N0CNxEC7NWeAlRmv3m1l2RV2mMVCyhnBPs0yql1EnmIpgCcrejAGhAzgNkH0thfoSlGcENA7lsxG4izxhIGlT5Wlpkw',
      isAvailable: true,
      rating : 4.9,
      noofitem:2,
      pstatus:"Inprogress",
      canreturn:1
    },
    {
      id: "2",
      name: 'Samsung Galaxy S21',
      brand: 'Samsung',
      price: 34899,
      offerprice:26788,
      image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-3.jpg',
      isAvailable: false,
      rating : 4.5,
      noofitem:77,
      pstatus:"Dispatched",
      canreturn:0
    },
    {
      id: "3",
      name: 'Google Pixel 6',
      brand: 'Google',
      price: 77799,
      offerprice:76788,
      image: 'https://amateurphotographer.com/wp-content/uploads/sites/7/2021/11/pixel-6-pro-rear-P1088727_cropped.jpg',
      isAvailable: true,
      rating : 3.9,
      noofitem:5,
      pstatus:"Delivered",
      canreturn:1
    },
    {
      id: "4",
      name: 'OnePlus 9 Pro',
      brand: 'OnePlus',
      price: 45899,
      offerprice:40788,
      image: 'https://fdn.gsmarena.com/imgroot/reviews/21/oneplus-9-pro/lifestyle/-1024w2/gsmarena_001.jpg',
      isAvailable: true,
      rating : 2.9,
      noofitem:3,
      pstatus:"Delivered",
      canreturn:1
    },
    {
      id: "5",
      name: 'Xiaomi Mi 11',
      brand: 'Xiaomi',
      price: 34699,
      offerprice:326788,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: true,
      rating : 4.8,
      noofitem:67,
      pstatus:"Dispatched",
      canreturn:0
    },
    {
      id: "6",
      name: 'Sony Xperia 1 III',
      brand: 'Sony',
      price: 11199,
      offerprice:10788,
      image: 'https://i0.wp.com/thetechmbbs.com/wp-content/uploads/2022/07/Sony-Xperia-1-III-hero.jpg',
      isAvailable: true,
      rating : 2.5,
      noofitem:23,
      pstatus:"Inprogress",
      canreturn:1
    },
    {
      id: "7",
      name: 'LG Velvet',
      brand: 'LG',
      price: 55599,
      offerprice:53788,
      image: 'https://www.zdnet.com/a/img/resize/05b755930101c4f0db5072e9549ab86fe91530cb/2020/06/19/6209af92-19ad-459c-97c8-92e77207572b/lg-velvet-main-1.jpg?auto=webp&fit=crop&height=900&width=1200',
      isAvailable: true,
      rating : 1.5,
      noofitem:45,
      pstatus:"Inprogress",
      canreturn:1
    },
    {
      id: "8",
      name: 'Huawei P40 Pro',
      brand: 'Huawei',
      price: 45899,
      offerprice:38788,
      image: 'https://m.media-amazon.com/images/I/417E3gDr7PL._AC_SY606_.jpg',
      isAvailable: true,
      rating : 3.5,
      noofitem:559,
      pstatus:"Dispatched",
      canreturn:0
    },
    {
      id: "9",
      name: 'Motorola Moto G Power',
      brand: 'Motorola',
      price: 34249,
      offerprice:30788,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: false,
      rating : 4.5,
      noofitem:55,
      pstatus:"Delivered",
      canreturn:0
    },
    {
      id: "10",
      name: 'Nokia 8.3',
      brand: 'Nokia',
      price: 23499,
      offerprice:18788,
      image: 'https://www.cnet.com/a/img/resize/c5d5ad518efbf6c6fb0c9dccc406727af5db08c7/hub/2018/05/18/3fb38d6c-ffee-4b3b-b033-39b1ee67d0fc/nokia-sirocco-9.jpg?auto=webp&width=1200',
      isAvailable: true,
      rating : 4.5,
      noofitem:4,
      pstatus:"Dispatched",
      canreturn:1
    }

  ]
  constructor(
    private _router:Router
  ) { }

  //fetch all products data
  fetchAllproduct():Array<Iproduct>{
  return this.productsArr
  }

  //fetch single data
  fetchproductdata(id:string):Iproduct{
    return this.productsArr.find(prod=>prod.id === id)!
  }

  //API call to add product
  Addproduct(prodobj:Iproduct){
    this.productsArr.push(prodobj);
    this._router.navigate(['/products'])
  }

  //API call to update the product
  updateproduct(product:Iproduct){

    let getIndex = this.productsArr.findIndex(prod=>prod.id === product.id)

    this.productsArr[getIndex] = product
    this._router.navigate(['/products',product.id],{
      queryParams:{canreturn:product.canreturn}
    })

  }

  removeproduct(id:string){
    let getIndex = this.productsArr.findIndex(prod=>prod.id === id)

    this.productsArr.splice(getIndex,1)
    this._router.navigate(['/products'])
  }
}
