import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {MatButton} from '@angular/material/button';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import { LayoutsComponent } from '../components/layouts/layouts.component';
import {globalEnvironment} from '../environments/environment'
import product from '../types/Product';
import { HttpClient } from '@angular/common/http';
import { productDetailComponent } from '../product-detail/product-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../product-add/product-add.component';
import { EditProductComponent } from '../product-edit/product-edit.component';
@Component({
    selector: 'app-store',
    standalone: true,
    templateUrl: './store.component.html',
    styleUrl: './store.component.css',
    imports: [RouterOutlet,
        LayoutsComponent,
        MatCard,
        MatCardTitle,
        MatCardContent,
        MatSidenavModule,
        MatButton,
        MatDrawer,
        RouterLink,
        NgForOf,
        DatePipe,
        NgIf,
        MatPaginator, productDetailComponent]
})
export class StoreComponent implements OnInit {
  productLst: product[]=[];
  chosenProduct: product | undefined;
  totalOfProduct: number | undefined;
  pageSize = 4;
  pageNumber = 1;
  test: any;
  constructor(private http: HttpClient, private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.http.get(globalEnvironment.baseUrl +'Product/getCount').subscribe((data:any) => {
        this.totalOfProduct= data;
    });
    this.getListProduct();
  }

  handleChooseProduct(pd: product) {
    this.chosenProduct = pd;
  }

  getListProduct() {
    this.http
      .post<product[]>(globalEnvironment.baseUrl + `Product/getPageListUse?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`, {})
      .subscribe((resp: product[]) => {
        this.productLst = resp;
      });
  }
  handlePage(even: PageEvent) {
    this.pageNumber = even.pageIndex + 1;
    this.getListProduct();
  }
  openAddProductDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '500px', // Kích thước của dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
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
  handleDetailProduct(selectedProduct: product){
    const dialogRef = this.dialog.open(productDetailComponent, {
      width: '500px',
      data: selectedProduct.id,  // Truyền dữ liệu sản phẩm vào dialog
    });
    dialogRef.afterClosed().subscribe(result => {
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
