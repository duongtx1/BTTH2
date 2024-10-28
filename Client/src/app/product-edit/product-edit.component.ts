import {Component, Inject} from '@angular/core';
import {MatDrawerContainer} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {globalEnvironment} from '../environments/environment'
import {Location} from '@angular/common';
import product from '../types/Product';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'product-edit',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatButton,
    FormsModule
  ],
  templateUrl: './product-edit.component.html',
})
export class EditProductComponent {
  editProduct: product = {id: "", productName: "", unitPrice:0,picture:"",description:"",category:""};

  constructor(private http: HttpClient,  
    public dialogRef: MatDialogRef<EditProductComponent>, @Inject(MAT_DIALOG_DATA) public data: product // Inject data từ dialog
  ) {
    this.editProduct = {id: data.id, productName: data.productName, unitPrice:data.unitPrice,picture:"",description:data.description,category:data.category};
  }

  handleSendProduct() {
    this.http.post(globalEnvironment.baseUrl + "Product/edit", {data:this.editProduct}, {
    }).subscribe({
      next: data => {
        alert("Sửa sản phẩm thành công");
        this.dialogRef.close();
      }
    })
  }

  handleDelete() {
    this.editProduct = {id: "", productName: "", unitPrice:0,picture:"",description:"",category:""};
    this.dialogRef.close();
  }
}
