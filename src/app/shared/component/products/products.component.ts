import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productinfo! : Array<Iproduct>

selectedproductId!:string;
isAvailable:boolean = false
  constructor(
    private _productservice:ProductService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productinfo = this._productservice.fetchAllproduct()
    this.selectedproductId = this.productinfo[0].id,
    this._router.navigate([this.productinfo[0].id],{
      relativeTo:this._routes,
      queryParams:{canreturn:this.productinfo[0].canreturn}
    })
  }

  onclickproduct(product:Iproduct){
    this.selectedproductId = product.id
  }

}