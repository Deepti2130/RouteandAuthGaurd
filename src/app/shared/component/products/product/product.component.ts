import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productid!:string;

productobj!:Iproduct
  constructor(
    private _routes:ActivatedRoute,
    private _productservice:ProductService
  ) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe((params:Params)=>{
      // console.log(params)
      this.productid = params['id']
      if(this.productid){
        this.productobj= this._productservice.fetchproductdata(this.productid)
      }


    })
  }

  onremoveproduct(){
    let getconfirm=confirm('Are you sure?')
    if(getconfirm){
      this._productservice.removeproduct(this.productid)
    }

  }

}
