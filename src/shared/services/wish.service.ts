import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../models/wishItem';
import { catchError, throwError } from 'rxjs';

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

    return this.http.get('wishs.json', options).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Client Error: ', error.error)
    } else {
      console.error('Server Error: ', error.error)
    }

    return throwError(() => new Error('Error Message'))
  }

  private addWish(wish: WishItem) {
    const options = this.getStandardOptions()
    options.headers.set('Authorization', 'value');
    this.http.post('wishs.json', wish, options)
  }
}
