import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe } from '@angular/common';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit, OnDestroy {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  // private readonly _NgxSpinnerService=inject(NgxSpinnerService)

  getSpecificProductSub!: Subscription;
  paramMapSub!: Subscription;

  productDetails:Iproduct | null = null

  ngOnInit(): void {
    // this._NgxSpinnerService.show()
    this.paramMapSub = this._ActivatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        console.log(paramMap.get('id'));

        let productId = paramMap.get('id');

        this.getSpecificProductSub = this._ProductsService
          .getSpecificProduct(productId)
          .subscribe({
            next: (res) => {
              // setTimeout(() => {
              //   this._NgxSpinnerService.hide();
              // }, 2000);
              console.log(res);
              this.productDetails = res
            },
          });
      },
    });
  }

  ngOnDestroy(): void {
    this.getSpecificProductSub?.unsubscribe();
  }
}
