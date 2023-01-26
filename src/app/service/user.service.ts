import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { identity, Observable, ObservedValuesFromArray } from 'rxjs';
import { Presurgery, Dod, Day1, Day2, Day3, Day4, Day7, Day14, Day30 } from '../interface/survey';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://showmeportal.missouri.edu/redcap/api/'
  private token = '40E24600B2ECA931EF1C959CDD7230C7'



  constructor(private http: HttpClient) {}


  initializeForm():any{
    let body = new FormData()
    body.append('token',this.token)
    body.append('content','record')
    body.append('format','json')
    body.append('type','flat')
    return body
  }
  
  verifyUser():Observable<any>{

    let body = this.initializeForm()
    body.append('action','export')
    body.append('csvDelimiter','')
    body.append('records','')
    body.append('forms[0]','patients')
    body.append('events[0]','patients_arm_2')
    body.append('rawOrLabel','raw')
    body.append('rawOrLabelHeaders','raw')
    body.append('exportCheckboxLabel','false')
    body.append('exportSurveyFields','false')
    body.append('exportDataAccessGroups','false')
    body.append('returnFormat','json')
    return this.http.post<any>(this.apiUrl,body)
   }

   registerUser(info:any):Observable<any>{
    let body = this.initializeForm()
    let user = JSON.parse(info)
    let data = {
      patient_username: user['username'],
      patient_password: user['password'],
      patient_email: user['email'],
      patient_name: user['fname'] + ' '+user['lname'],
      patient_bitrhday: user['birthday'],
      patient_address: user['address'],
      patient_surgery_date: user['surgery_date'],
      pid: String(user['fname']).substring(0,3) + String(user['lname']).substring(0,3) + String(user['birthday']).substring(0,4),
      redcap_event_name: 'patients_arm_2',
      recordid_pss: user['fname'] + user['lname'],
      patient_survey_taken: '0'
    }
    body.append('data',JSON.stringify([data]))
    console.log(data)
    return this.http.post<any>(this.apiUrl,body)
   }

  sendSurveyResults():Observable<any>{
    let body = this.initializeForm()
    body.append('data',JSON.stringify(this.initializeFormData()))
    return this.http.post<any>(this.apiUrl,body)
  }
  
  sendWoundPic(pic:File):Observable<any>{
    let user = JSON.parse(sessionStorage.getItem('user'))
    let body = new FormData()
    body.append('token',this.token)
    body.append('content','file')
    body.append('action','import')
    body.append('returnFormat','json')
    body.append('record',user['patient_name'])
    body.append('file',pic)
    if(user["patient_days_after_surgery"]=="0"){
      body.append('event','day_of_discharge_arm_1')
      body.append('field','wound_pic_dod')
    }

    if(user["patient_days_after_surgery"]=="2"){
      body.append('event','discharge_day_2_arm_1')
      body.append('field','wound_pic_dd2')
    }

    if(user["patient_days_after_surgery"]=="4"){
      body.append('event','discharge_day_4_arm_1')
      body.append('field','wound_pic_dd4')
    }

    if(user["patient_days_after_surgery"]=="7"){
      body.append('event','discharge_day_7_arm_1')
      body.append('field','wound_pic_dd7')
    }

    
    if(user["patient_days_after_surgery"]=="14"){
      body.append('event','discharge_day_14_arm_1')
      body.append('field','wound_pic_dd14')
    }

    return this.http.post<any>(this.apiUrl,body)



  }

  getAppointments():Observable<any>{
    let body = this.initializeForm()
    body.append('action','export')
    body.append('csvDelimiter','')
    body.append('records','')
    body.append('forms[0]','appointments')
    body.append('events[0]','appointments_arm_5')
    body.append('rawOrLabel', 'label')
    body.append('rawOrLabelHeaders','raw')
    body.append('exportCheckboxLabel','false')
    body.append('exportSurveyFields', 'false')
    body.append('exportDataAccessGroups', 'false')
    body.append('returnFormat','json')
    return this.http.post<any>(this.apiUrl,body)
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


  initializeFormData():any{
    let ampac = JSON.parse(sessionStorage.getItem('ampac'))
    let peg = JSON.parse(sessionStorage.getItem('peg'))
    let phq1 = JSON.parse(sessionStorage.getItem('phq1'))
    let wound = JSON.parse(sessionStorage.getItem('wound'))
    let followUp = JSON.parse(sessionStorage.getItem('followUp'))
    let woundPic = JSON.parse(sessionStorage.getItem('woundPic'))
    let user = JSON.parse(sessionStorage.getItem('user'))
    

    if(user["patient_days_after_surgery"]=="-1"){



      const data:Presurgery = {
        recordid_pss: user['patient_name'],
        patientid_pss: user['pid'],
        ampac_q1_pss: ampac['q1'],
        ampac_q2_pss: ampac['q2'],
        ampac_q3_pss: ampac['q3'],
        ampac_q4_pss: ampac['q4'],
        ampac_q5_pss: ampac['q5'],
        ampac_q6_pss: ampac['q6'],
        peg_q1_pss: peg['q1'],
        peg_q2_pss: peg['q2'],
        peg_q3_pss: peg['q3'],
        phq1_pss: phq1['q1'],
        phq2_pss: phq1['q2'],
        phq3_pss: phq1['q3'],
        phq4_pss: phq1['q4'],
        phq5_pss: phq1['q5'],
        phq6_pss: phq1['q6'],
        phq7_pss: phq1['q7'],
        phq8_pss: phq1['q8'],
        phq9_pss: phq1['q9'],
        phq10_pss: phq1['q10'],
        presurgery_surveys_ba77_complete: '2',
        redcap_event_name: 'day_of_discharge_arm_1'
      }

      
    console.log(data)
    return([data])

    }

    if(user["patient_days_after_surgery"]=="0"){
      const data:Dod = {
        recordid_pss: user['patient_name'],
        ampac_patientid_dod: user['pid'],
        ampac_q1_dod: ampac['q1'],
        ampac_q2_dod: ampac['q2'],
        ampac_q3_dod: ampac['q3'],
        ampac_q4_dod: ampac['q4'],
        ampac_q5_dod: ampac['q5'],
        ampac_q6_dod: ampac['q6'],
        peg_q1_dod: peg['q1'],
        peg_q2_dod: peg['q2'],
        peg_q3_dod: peg['q3'],
        phq1_dod: phq1['q1'],
        phq2_dod: phq1['q2'],
        phq3_dod: phq1['q3'],
        phq4_dod: phq1['q4'],
        phq5_dod: phq1['q5'],
        phq6_dod: phq1['q6'],
        phq7_dod: phq1['q7'],
        phq8_dod: phq1['q8'],
        phq9_dod: phq1['q9'],
        phq10_dod: phq1['q10'],
        wound_pic_dod: '',
        wound_q1_dod: wound['q1'],
        wound_q2_dod: wound['q2'],
        wound_q3_dod: wound['q3'],
        wound_q4_dod: wound['q4'],
        wound_q5_dod: wound['q5'],
        wound_q6_dod: wound['q6'],
        wound_q7_dod: wound['q7'],
        wound_q7p1_dod:wound['q7pt1'],
        wound_q7p2_dod:wound['q7pt2'],
        wound_q7p3_dod:wound['q7pt3'],
        wound_q8_dod:wound['q8'],
        fu_q1_dod: followUp['q1'],
        fu_q2_dod: followUp['q2'],
        day_of_discharge_surveys_complete: '2',
        redcap_event_name: 'day_of_discharge_arm_1'
      }

      
    console.log(data)
    return([data])

    }

    if(user["patient_days_after_surgery"]=="1"){
      const data:Day1 = {
        recordid_pss: user['patient_name'],
        patientid_dd1: user['pid'],
        ampac_q1_dd1: ampac['q1'],
        ampac_q2_dd1: ampac['q2'],
        ampac_q3_dd1: ampac['q3'],
        ampac_q4_dd1: ampac['q4'],
        ampac_q5_dd1: ampac['q5'],
        ampac_q6_dd1: ampac['q6'],
        peg_q1_dd1: peg['q1'],
        peg_q2_dd1: peg['q2'],
        peg_q3_dd1: peg['q3'],
        phq1_dd1: phq1['q1'],
        phq2_dd1: phq1['q2'],
        phq3_dd1: phq1['q3'],
        phq4_dd1: phq1['q4'],
        phq5_dd1: phq1['q5'],
        phq6_dd1: phq1['q6'],
        phq7_dd1: phq1['q7'],
        phq8_dd1: phq1['q8'],
        phq9_dd1: phq1['q9'],
        phq10_dd1: phq1['q10'],
        discharge_day_1_complete: '2',
        redcap_event_name: 'discharge_day_1_arm_1'
      }

      console.log(data)
      return([data])
    }

    if(user["patient_days_after_surgery"]=="2"){
      const data:Day2 = {
        recordid_pss: user['patient_name'],
        patientid_dd2: user['pid'],
        wound_pic_dd2: woundPic,
        wound_q1_dd2: wound['q1'],
        wound_q2_dd2: wound['q2'],
        wound_q3_dd2: wound['q3'],
        wound_q4_dd2: wound['q4'],
        wound_q5_dd2: wound['q5'],
        wound_q6_dd2: wound['q6'],
        wound_q7_dd2: wound['q7'],
        wound_q7p1_dd2: wound['q7pt1'],
        wound_q7p2_dd2: wound['q7pt2'],
        wound_q7p3_dd2: wound['q7pt3'],
        wound_q8_dd2: wound['q8'],
        discharge_day_2_complete: '2',
        redcap_event_name: 'discharge_day_2_arm_1'
      }

      console.log(data)
      return([data])
    }

    if(user["patient_days_after_surgery"]=="3"){
      const data:Day3 = {
        recordid_pss: user['patient_name'],
        patientid_dd3: user['pid'],
        fu_q1_dd3: followUp['q1'],
        fu_q2_dd3: followUp['q2'],
        discharge_day_3_complete: '2',
        redcap_event_name: 'discharge_day_3_arm_1'
      }

      console.log(data)
      return([data])
    }

    if(user["patient_days_after_surgery"]=="4"){
      const data:Day4 = {
        recordid_pss: user['patient_name'],
        patientid_dd4: user['pid'],
        wound_pic_dd4: '',
        wound_q1_dd4: wound['q1'],
        wound_q2_dd4: wound['q2'],
        wound_q3_dd4: wound['q3'],
        wound_q4_dd4: wound['q4'],
        wound_q5_dd4: wound['q5'],
        wound_q6_dd4: wound['q6'],
        wound_q7_dd4: wound['q7'],
        wound_q7p1_dd4: wound['q7pt1'],
        wound_q7p2_dd4: wound['q7pt2'],
        wound_q7p3_dd4: wound['q7pt3'],
        wound_q8_dd4: wound['q8'],
        discharge_day_4_complete: '2',
        redcap_event_name: 'discharge_day_4_arm_1'
      }

      console.log(data)
      return([data])
    }

    if(user["patient_days_after_surgery"]=="7"){
      const data:Day7 = {
        recordid_pss: user['patient_name'],
        patientid_dd7: user['pid'],
        ampac_q1_dd7: ampac['q1'],
        ampac_q2_dd7: ampac['q2'],
        ampac_q3_dd7: ampac['q3'],
        ampac_q4_dd7: ampac['q4'],
        ampac_q5_dd7: ampac['q5'],
        ampac_q6_dd7: ampac['q6'],
        phq1_dd7: phq1['q1'],
        phq2_dd7: phq1['q2'],
        phq3_dd7: phq1['q3'],
        phq4_dd7: phq1['q4'],
        phq5_dd7: phq1['q5'],
        phq6_dd7: phq1['q6'],
        phq7_dd7: phq1['q7'],
        phq8_dd7: phq1['q8'],
        phq9_dd7: phq1['q9'],
        phq10_dd7: phq1['q10'],
        wound_pic_dd7: '',
        wound_q1_dd7: wound['q1'],
        wound_q2_dd7: wound['q2'],
        wound_q3_dd7: wound['q3'],
        wound_q4_dd7: wound['q4'],
        wound_q5_dd7: wound['q5'],
        wound_q6_dd7: wound['q6'],
        wound_q7_dd7: wound['q7'],
        wound_q7p1_dd7: wound['q7pt1'],
        wound_q7p2_dd7: wound['q7pt2'],
        wound_q7p3_dd7: wound['q7pt3'],
        wound_q8_dd7: wound['q8'],
        discharge_day_7_complete: '2',
        redcap_event_name: 'discharge_day_7_arm_1'
      }

      console.log(data)
      return([data])
    }

    if(user["patient_days_after_surgery"]=="14"){
      const data:Day14 = {
        recordid_pss: user['patient_name'],
        patientid_dd14: user['pid'],
        ampac_q1_dd14: ampac['q1'],
        ampac_q2_dd14: ampac['q2'],
        ampac_q3_dd14: ampac['q3'],
        ampac_q4_dd14: ampac['q4'],
        ampac_q5_dd14: ampac['q5'],
        ampac_q6_dd14: ampac['q6'],
        peg_q1_dd14: peg['q1'],
        peg_q2_dd14: peg['q2'],
        peg_q3_dd14: peg['q3'],
        phq1_dd14: phq1['q1'],
        phq2_dd14: phq1['q2'],
        phq3_dd14: phq1['q3'],
        phq4_dd14: phq1['q4'],
        phq5_dd14: phq1['q5'],
        phq6_dd14: phq1['q6'],
        phq7_dd14: phq1['q7'],
        phq8_dd14: phq1['q8'],
        phq9_dd14: phq1['q9'],
        phq10_dd14: phq1['q10'],
        wound_pic_dd14: '',
        wound_q1_dd14: wound['q1'],
        wound_q2_dd14: wound['q2'],
        wound_q3_dd14: wound['q3'],
        wound_q4_dd14: wound['q4'],
        wound_q5_dd14: wound['q5'],
        wound_q6_dd14: wound['q6'],
        wound_q7_dd14: wound['q7'],
        wound_q7p1_dd14: wound['q7pt1'],
        wound_q7p2_dd14: wound['q7pt2'],
        wound_q7p3_dd14: wound['q7pt3'],
        wound_q8_dd14: wound['q8'],
        discharge_day_14_complete: '2',
        redcap_event_name: 'discharge_day_14_arm_1'
      }

      console.log(data)
      return([data])
    }
     
    if(user["patient_days_after_surgery"]=="30"){
      const data: Day30 ={
        recordid_pss: user['patient_name'],
        patientid_dd30: user['pid'],
        ampac_q1_dd30: ampac['q1'],
        ampac_q2_dd30: ampac['q2'],
        ampac_q3_dd30: ampac['q3'],
        ampac_q4_dd30: ampac['q4'],
        ampac_q5_dd30: ampac['q5'],
        ampac_q6_dd30: ampac['q6'],
        peg_q1_dd30: peg['q1'],
        peg_q2_dd30: peg['q2'],
        peg_q3_dd30: peg['q3'],
        phq1_dd30: phq1['q1'],
        phq2_dd30: phq1['q2'],
        phq3_dd30: phq1['q3'],
        phq4_dd30: phq1['q4'],
        phq5_dd30: phq1['q5'],
        phq6_dd30: phq1['q6'],
        phq7_dd30: phq1['q7'],
        phq8_dd30: phq1['q8'],
        phq9_dd30: phq1['q9'],
        phq10_dd30: phq1['q10'],
        discharge_day_30_complete: '2',
        redcap_event_name: 'discharge_day_30_arm_1'
      }

      console.log(data)
      return([data])
    }

  }


  
}
