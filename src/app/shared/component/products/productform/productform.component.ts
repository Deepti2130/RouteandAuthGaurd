import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  productid!:string;
  productobj!:Iproduct
  productForm! : FormGroup
  isIneditmode:boolean = false


  updatebtnFlag : boolean = false
  constructor(
    private _routes:ActivatedRoute,
    private _router:Router,
    private _productservice:ProductService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup ({
      name:new FormControl(null,[Validators.required]),
      price:new FormControl(null,[Validators.required]),
      offerprice:new FormControl(null,[Validators.required]),
      image:new FormControl(null,[Validators.required]),
      isAvailable:new FormControl(null,[Validators.required]),
      rating:new FormControl(null,[Validators.required]),
      noofitem:new FormControl(null,[Validators.required]),
      canreturn:new FormControl(null,[Validators.required]),
      pstatus:new FormControl(null,[Validators.required]),
    })
    this.productid = this._routes.snapshot.params['id']
    if(this.productid){
      this.isIneditmode = true
      this.productobj=this._productservice.fetchproductdata(this.productid)

      this.productForm.patchValue({
        ...this.productobj,
        canreturn:this.productobj.canreturn ? "Yes":"No",
        isAvailable:this.productobj.isAvailable?"Yes":"No"
      })
    }

    this._routes.queryParams
    .subscribe((params:Params)=>{
      if(params['canreturn']==='0'){
        this.productForm.disable()
        this.updatebtnFlag = true
      }
    })

  }

  onproductAdd(){
    if(this.productForm.valid){
      let canreturnVal = this.productForm.controls['canreturn'].value === "Yes" ? 1: 0

      let product:Iproduct={
        ...this.productForm.value,
        canreturn:canreturnVal,
        id:this._uuidservice.generateUuid()

       }
       this._productservice.Addproduct(product)

    }



  }

  onupdateproduct(){
    let updatedobj:Iproduct={
    ...this.productForm.value,
    canreturn:this.productForm.controls['canreturn'].value === "Yes" ? 1: 0,
    isAvailable:this.productForm.controls['isAvailable'].value === "Yes" ? "true" :"false",
    id:this.productid
    }
    this._productservice.updateproduct(updatedobj)
    this.productForm.reset()

  }

}
