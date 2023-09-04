import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor( private firestore: Firestore) {}

  public async getProducts() {
    try {
      const productCollection = collection(this.firestore, 'products');
      const productDocSnap = await getDocs(productCollection);

      const result: any[] = [];
      productDocSnap.forEach((doc) => {
        result.push(doc.data());
      });

      const productsData: Product[] = [];

      result.map((elem) => {
        const product = new Product(
          elem.id,
          elem.title,
          elem.description,
          elem.category,
          elem.imageUrl,
          elem.price,
          elem.featured
        );
        productsData.push(product);
      });

      this.products.next(productsData)
      
    } catch (error) {
       console.log(error);
    }
  }
}
