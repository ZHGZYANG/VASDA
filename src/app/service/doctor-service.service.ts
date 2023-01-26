import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  
  private apiUrl = 'https://showmeportal.missouri.edu/redcap/api/'
  private token = '40E24600B2ECA931EF1C959CDD7230C7'

  constructor(private http: HttpClient) {
   }

   initializeForm():any{
    let body = new FormData()
    body.append('token',this.token)
    body.append('content','record')
    body.append('format','json')
    body.append('type','flat')
    body.append('action','export')
    body.append('csvDelimiter','')
    body.append('rawOrLabel','raw')
    body.append('rawOrLabelHeaders','raw')
    body.append('exportCheckboxLabel','false')
    body.append('exportSurveyFields','false')
    body.append('exportDataAccessGroups','false')
    body.append('returnFormat','json')

    return body
  }

   verifyUser(username: string, password: string):Observable<any>{
    let body = this.initializeForm()

    body.append('records','')
    body.append('forms[0]','doctors')
    body.append('events[0]','doctors_arm_4')
    body.append('filterLogic', "[doctor_username] = '" + username + "' AND [doctor_password] = '" + password + "'")

    return this.http.post<any>(this.apiUrl,body)
   }

   getPatients(id: string):Observable<any>{
    let body =  this.initializeForm()

    body.append('forms[0]', 'patients')
    body.append('events[0]', 'patients_arm_2')
    body.append('filterLogic', "[doctor_id] =  '" + id + "'")

    return this.http.post<any>(this.apiUrl, body)
   }

   getPatientSurveys(id: string):Observable<any>{
    let body = this.initializeForm()
    
    body.append('forms[0]', 'patients')
    body.append('forms[1]', 'presurgery_surveys_ba77')
    body.append('events[0]', 'patients_arm_2')
    body.append('events[1]', 'day_of_discharge_arm_1')
    body.append('filterLogic', "[patientid_pss] = '" + id + "'")
    
    return this.http.post<any>(this.apiUrl, body)
   }

   getMessages():Observable<any>{
    let body = this.initializeForm()
    body.append('action','export')
    body.append('csvDelimiter','')
    body.append('records','')
    body.append('forms[0]','chats')
    body.append('events[0]','chats_arm_3')
    body.append('rawOrLabel', 'label')
    body.append('rawOrLabelHeaders','raw')
    body.append('exportCheckboxLabel','false')
    body.append('exportSurveyFields', 'false')
    body.append('exportDataAccessGroups', 'false')
    body.append('returnFormat','json')
    return this.http.post<any>(this.apiUrl,body)
  }

  sendMessages(message:any):Observable<any>{
    let body=this.initializeForm()
    

    const data = {
      recordid_pss: Math.random().toString(36).substr(2, 5),
      chat_sender: message['chat_sender'],
      chat_receiver: message['chat_receiver'],
      chat_message: message['chat_message'],
      chat_sent_date: message['chat_sent_date'],
      redcap_event_name: 'chats_arm_3'
    }
    body.append('data',JSON.stringify([data]))
    return this.http.post<any>(this.apiUrl,body)
  }
}
