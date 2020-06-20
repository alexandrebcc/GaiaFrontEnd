import axios from "axios";
import { API_URL as url } from "@/config/";

export class HttpService {
  constructor(route) {
    this.route = route;
  }

  get url() {
    return url + this.route;
  }

  async getAll() {
    const resp = await axios.get(this.url);
    return resp.data;
  }

  async login(params) {
    const resp = await axios.post(`${this.url}/login`, params);
    return resp.data;
  }

  async getById(id) {
    const resp = await axios.get(`${this.url}/${id}`);
    return resp.data;
  }

  async create(params) {
    const resp = await axios.post(this.url, params);
    return resp.data;
  }

  async put(id, params) {
    const resp = await axios.put(`${this.url}/${id}`, params);
    return resp.data;
  }

  async patch(id, params) {
    const resp = await axios.patch(`${this.url}/${id}`, params);
    return resp.data;
  }

  async delete(id) {
    const resp = await axios.delete(`${this.url}/${id}`);
    return resp.data;
  }
}
