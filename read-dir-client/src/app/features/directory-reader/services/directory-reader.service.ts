import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchDirectoryRequest } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class DirectoryReaderService {
  private URL = environment.apiBaseUrl;

  private _directoryListing = new BehaviorSubject<any>(null);
  private directoryListing$ = this._directoryListing.asObservable();

  constructor(private http: HttpClient) {}

  getFullDirectoryListing(payload: SearchDirectoryRequest) {
    const params = new HttpParams()
      .set('path', payload.path)
      .set('depth', payload.depth);

    this.http.get(this.URL + `/files`, { params }).subscribe((response: any) => {
      if (response) {
        this.setDirectoryListing(response);
      } else {
        this.setDirectoryListing([]);
      }
    });
  }

  setDirectoryListing(listing: any) {
    this._directoryListing.next(listing);
  }

  get directoryListing(): Observable<any> {
    return this.directoryListing$;
  }

}
