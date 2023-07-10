import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  //POST request
  postLaptop(data: any) {
    return this._http.post<any>("http://localhost:3000/laptob", data).pipe(map((res: any) => {
      return res;
    }));
  }

  //GET request
  getLaptop() {
    return this._http.get<any>("http://localhost:3000/laptob").pipe(map((res: any) => {
      return res;
    }));
  }

  //delete request
  deleteLaptop(id: number) {
    return this._http.delete<any>("http://localhost:3000/laptob/" + id).pipe(map((res: any) => {
      return res;
    }));
  }

  //update request
  updateLaptop(id: number, data: any) {
    return this._http.put<any>("http://localhost:3000/laptob/" + id, data).pipe(map((res: any) => {
      return res;
    }));
  }

}
