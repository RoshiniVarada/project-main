import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }
  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'https://cors-anywhere.herokuapp.com/https://e30s01zjdf.execute-api.us-east-1.amazonaws.com/dev/add/Python/10', name: 'Python' },
      { id: 'https://cors-anywhere.herokuapp.com/https://e30s01zjdf.execute-api.us-east-1.amazonaws.com/dev/add/Angular JS/10', name: 'Angular JS' },
      { id: 'https://cors-anywhere.herokuapp.com/https://e30s01zjdf.execute-api.us-east-1.amazonaws.com/dev/add/Java/10', name: 'Java' },
      { id: 'https://cors-anywhere.herokuapp.com/https://e30s01zjdf.execute-api.us-east-1.amazonaws.com/dev/add/Data Structures Algorithms/10', name: 'Data Structures' }
    ];
  }

}
