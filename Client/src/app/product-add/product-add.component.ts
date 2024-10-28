import {Component} from '@angular/core';
import {MatDrawerContainer} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {globalEnvironment} from '../environments/environment'
import {Location} from '@angular/common';
import product from '../types/Product';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'product-add',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatButton,
    FormsModule
  ],
  templateUrl: './product-add.component.html',
})
export class AddProductComponent {
  newProduct: product = {id: "", productName: "", unitPrice:0,picture:"",description:"",category:""};

  constructor(private http: HttpClient,  public dialogRef: MatDialogRef<AddProductComponent>) {
  }

  handleSendProduct() {
    this.http.post(globalEnvironment.baseUrl + "Product/create", {data:this.newProduct}, {
    }).subscribe({
      next: data => {
        alert("Tạo sản phẩm thành công");
        this.dialogRef.close();
      }
    })
  }

  handleDelete() {
    this.newProduct = {id: "", productName: "", unitPrice:0,picture:"",description:"",category:""};
    this.dialogRef.close();
  }
}
