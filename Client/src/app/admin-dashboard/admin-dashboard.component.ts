import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { globalEnvironment } from '../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../product-add/product-add.component';
import product from '../types/Product';
import { EditProductComponent } from '../product-edit/product-edit.component';
import { CommonModule } from '@angular/common';
import user from '../types/User';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet,CommonModule,
    MatPaginator
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent  implements OnInit {
  totalOfProduct:number=0;
  totalOfUser:number=0;
  productLst: product[]=[];
  userLst:user[]=[]
  pageSize = 3;
  pageNumber = 1;
  constructor(private http: HttpClient, private dialog: MatDialog)
  {
  }
  ngOnInit(): void {
    this.http.get(globalEnvironment.baseUrl +'Product/getCount').subscribe((data:any) => {
      this.totalOfProduct= data;
  });
  this.http.get(globalEnvironment.baseUrl +'User/getCount').subscribe((data:any) => {
    this.totalOfUser= data;
});
     this.getListProduct();
     this.getListUser();
  }
  openAddProductDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '500px', // Kích thước của dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }
  getListProduct() {
    this.http
      .post<product[]>(globalEnvironment.baseUrl + `Product/getPageListUse?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`, {})
      .subscribe((resp: product[]) => {
        this.productLst = resp;
      });
  }
  getListUser() {
    this.http
      .post<user[]>(globalEnvironment.baseUrl + `User/getPageListUse?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`, {})
      .subscribe((resp: user[]) => {
        this.userLst = resp;
      });
  }
  handleProductPage(even: PageEvent) {
    this.pageNumber = even.pageIndex + 1;
    this.getListProduct();
  }
  handleUserPage(even: PageEvent) {
    this.pageNumber = even.pageIndex + 1;
    this.getListUser();
  }
  openEditProductDialog(selectedProduct: product) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '500px',
      data: selectedProduct,  // Truyền dữ liệu sản phẩm vào dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }
  handleDeleteProduct(selectedProduct: product){
    this.http.post(globalEnvironment.baseUrl + "Product/delete", {id:selectedProduct.id}, {
    }).subscribe({
      next: data => {
        alert("Xóa sản phẩm thành công");
        window.location.reload();
      }
    })
  }

}
