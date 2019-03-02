import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AbstractService {

  private BASE_URL = environment.api;

  constructor(protected httpClient: HttpClient) {}

  public get(url): any {
    return this.httpClient
      .get(`${this.BASE_URL}/${url}`);
  }

}