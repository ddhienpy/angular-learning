import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getWishs() {
    const options = this.getStandardOptions()
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })

    return this.http.get('wishs.json', options)
  }

  private addWish(wish: WishItem) {
    const options = this.getStandardOptions()
    options.headers.set('Authorization', 'value');
    this.http.post('wishs.json', wish, options)
  }
}
