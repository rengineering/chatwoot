/* global axios */
import ApiClient from './ApiClient';

class ContactAPI extends ApiClient {
  constructor() {
    super('contacts', { accountScoped: true });
  }

  get(page, sortAttr = 'name') {
    return axios.get(`${this.url}?page=${page}&sort=${sortAttr}`);
  }

  getConversations(contactId) {
    return axios.get(`${this.url}/${contactId}/conversations`);
  }

  search(search = '', page = 1) {
    return axios.get(`${this.url}/search?q=${search}&page=${page}`);
  }
}

export default new ContactAPI();
