import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IEmployee } from '../../assets/data/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  private _url: string= './assets/data/Rahul_employees.json';
  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<IEmployee[]>{
    const headers_adding = new HttpHeaders({
      'Name': 'Rahul jetli'
    });

    let param = new HttpParams().append('age','27');
    param = param.append('Profession', 'Engineer');

    return this.http.get<IEmployee[]>
    (this._url,{headers: headers_adding, params: param })
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
    //console.error('Error on '+error.message);
   // console.log('Error on '+error.message || "Server Error");
    return throwError(error);
  }

  delete(id : number){
    return this.http.delete<IEmployee[]>(this._url);
  }
}