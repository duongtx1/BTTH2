import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import product from '../types/Product';
import {HttpClient} from "@angular/common/http";
import {globalEnvironment} from '../environments/environment';
import {NgIf} from "@angular/common";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './product-detail.component.html',
})
export class productDetailComponent implements OnInit {
  product: product| undefined = undefined;
  productContent: any;

  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.product= {id: data, productName: "", unitPrice:0,picture:"",description:"",category:""};
  }
  ngOnInit():void {
    this.http.get(globalEnvironment.baseUrl + "Product/getElementById/" + this.product?.id,)
      .subscribe((data: any) => {
          this.productContent = data
          console.log(this.productContent)
        }
      );
  }
}
