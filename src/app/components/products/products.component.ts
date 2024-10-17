import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink ,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly _ProductsService = inject(ProductsService);
  // private readonly _NgxSpinnerService=inject(NgxSpinnerService)

  productsList: Iproduct[] = [];

  getAllProductsSub!: Subscription;

  ngOnInit(): void {
    // this._NgxSpinnerService.show()
    this.getAllProductsSub = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        // setTimeout(() => {
        //   this._NgxSpinnerService.hide();
        // }, 2000);
        this.productsList = res;
        console.log(res);
      },
    });
  }

  ngOnDestroy(): void {
    this.getAllProductsSub?.unsubscribe();
  }
}
