import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService<T> {

  constructor(protected http: HttpClient, protected entityUrl: string) { }

  public getItems(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.entityUrl);
  }

  public add(data: T): Observable<any> {
    const url = `${this.entityUrl}/Create`;
    return this.http.post<any>(url, data);
  }

  public update(data: T, id: string): Observable<any> {
    const url = `${this.entityUrl}/Update?key=${id}`;
    return this.http.put<T>(url, data);
  }

  public delete(id: string): Observable<any> {
    const url = `${this.entityUrl}/Delete?key=${id}`;
    return this.http.delete<T>(url);
  }
}
