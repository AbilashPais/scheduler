import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private baseUrl = environment.schedulerREST;
  constructor(private http: HttpClient) { }

  getSchedulerEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointments`);
  }
  addSchedule(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appointments`, data)
  }

  updateSchedule(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/appointments/${id}`, data)
  }

  deleteSchedule(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/appointments/${id}`)
  }
}
