

const BASE_URL = 'http://localhost:3008';

class UserService {

  post<a>(url: string, params: Object): Promise<a> {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = this.headers({});
        const res = await fetch(`${BASE_URL}${url}`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(params),
        });
        const resJson = await res.json();
        resolve(resJson);
      } catch (error: any) {
        console.log('Erro ao enviar informações 😞', error);
      }
    });
  }
  get<a>(url: string): Promise<a> {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = this.headers({});
        const res = await fetch(`${BASE_URL}${url}`, {
          method: 'GET',
          headers,
        });
        const resJson = await res.json();
        resolve(resJson);
      } catch (error) {
        console.log('Erro ao enviar informações 😞', error);
      }
    });
  }

  headers(h: Object): any {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...h,
    };
    return headers;
  }
}
const Service = new UserService();

export default Service;
