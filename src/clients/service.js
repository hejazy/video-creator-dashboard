

export class BaseService {

  baseURL;
  constructor() {
    let siteUrl = "http://localhost:3046";
    siteUrl = siteUrl || '';
    let route = process.env.BASE_ROUTE;
    route = route || '/api/v1';
    this.baseURL = `${siteUrl}${route}`;
  }

}