import { BaseService } from './service';
import Axios from 'axios';
import { errors } from '../util/error-handling';

export const GenerateServiceFactory = (function () {
  let instance;
  function createInstance() {
    return new GenerateService();
  }
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
class GenerateService extends BaseService {
  serviceRoute;
  constructor() {
    super();
    this.serviceRoute = 'generate';
    this.configuration = {};
  }

  async create(images) {
    return await Axios.post(`${this.baseURL}/${this.serviceRoute}`, images, {
      ...this.configuration,
    })
      .catch(error => {
        errors(error);
      });
  }
}