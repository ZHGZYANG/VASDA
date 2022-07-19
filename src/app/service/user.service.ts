import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';
import { Survey } from '../interface/survey';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  private user: User;
  private pID: any;

  constructor(private http: HttpClient) {}

  verifyUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user)
  }
  verifyDoctor(user: User): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/doctors-login`, user)
  }
  setSurveyResults(survey: Survey): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/main-patients/question2`, survey)
  }
  getAppointments(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/main-patients/appointments`, user)
  }
  getDischargeInstructions(user: User): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/main-patients/discharge-instructions`, user)
  }
  getPatients(user: User): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/main-doctors/discharge-instructions`, user)
  }
  getNotes(user: User): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/main-doctors/discharge-instructions`, user)
  }
  registerUser(user: User): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/user-registration`, user)
  }
  getSurveys(user: User): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/main-doctors/survey-results`, user)
  }

  setInstruction(patient:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/main-doctors/discharge-instructions/set-instruction`, patient)
  }
  getPatientsForChat(user: User): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/main-doctors/chat`, user)
  }

  getMessages(pID:any):Observable<any>{
    const params = new HttpParams().append('pID', pID);
    return this.http.get<any>(`${this.apiUrl}/main-doctors/chat`,{params})
  }
  sendMessage(message:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/main-doctors/chat`, message)
  }
  getMessagesForPatients(pID:any):Observable<any>{
    const params = new HttpParams().append('pID', pID);
    return this.http.get<any>(`${this.apiUrl}/main-patients/chat`,{params})
  }
}
