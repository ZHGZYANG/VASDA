import { Component, OnInit } from '@angular/core';
import { PatientInformation } from 'src/app/interface/patientInformation';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Patient } from 'src/app/interface/patient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-doctors',
  templateUrl: './main-doctors.page.html',
  styleUrls: ['./main-doctors.page.scss'],
})

export class MainDoctorsPage implements OnInit { 

  username: string
  patient_count: number
  patient_information: PatientInformation[]

  constructor(
    private doctorService:DoctorServiceService,
    private router:Router
    ) { }

  ngOnInit() {
    this.patient_information = []
    var User = JSON.parse(sessionStorage.getItem('user'))
    if (User['doctor_username']){
      this.username = User["doctor_name"]
    }

    this.doctorService.getPatients(User['d_id']).subscribe(
      (response) => {
        this.patient_count = response.length

        
        for( let i = 0; i < this.patient_count; i++)
        {
        
          this.doctorService.getPatientSurveys(response[i]['patient_record_id']).subscribe(
            (survey_response) => {
                if(survey_response.length == 0)
                {
                  return;
                }
                console.log(survey_response)
                var temp_patient: PatientInformation = {
                  name: response[i]['patient_name'],
                  id: response[i]['patient_record_id'],
                  birthday: response[i]['patient_bitrhday'],
                  address: response[i]['patient_address'],
                  email: response[i]['patient_email'],
                  surgery_date: response[i]['patient_surgery_date'],
                  days_since_surgery: response[i]['patient_days_after_surgery'],
                  ampac: [
                    {
                      day: "presurgery",
                      question_1: survey_response[i]['ampac_q1_pss'],
                      question_2: survey_response[i]['ampac_q2_pss'],
                      question_3: survey_response[i]['ampac_q3_pss'],
                      question_4: survey_response[i]['ampac_q4_pss'],
                      question_5: survey_response[i]['ampac_q5_pss'],
                      question_6: survey_response[i]['ampac_q6_pss']
                    },
                    {
                      day: "day of discharge",
                      question_1: survey_response[i]['ampac_q1_dod'],
                      question_2: survey_response[i]['ampac_q2_dod'],
                      question_3: survey_response[i]['ampac_q3_dod'],
                      question_4: survey_response[i]['ampac_q4_dod'],
                      question_5: survey_response[i]['ampac_q5_dod'],
                      question_6: survey_response[i]['ampac_q6_dod']
                    },
                    {
                      day: "day 1",
                      question_1: survey_response[i]['ampac_q1_dd1'],
                      question_2: survey_response[i]['ampac_q2_dd1'],
                      question_3: survey_response[i]['ampac_q3_dd1'],
                      question_4: survey_response[i]['ampac_q4_dd1'],
                      question_5: survey_response[i]['ampac_q5_dd1'],
                      question_6: survey_response[i]['ampac_q6_dd1']
                    },
                    {
                      day: "day 7",
                      question_1: survey_response[i]['ampac_q1_dd7'],
                      question_2: survey_response[i]['ampac_q2_dd7'],
                      question_3: survey_response[i]['ampac_q3_dd7'],
                      question_4: survey_response[i]['ampac_q4_dd7'],
                      question_5: survey_response[i]['ampac_q5_dd7'],
                      question_6: survey_response[i]['ampac_q6_dd7']
                    },
                    {
                      day: "day 14",
                      question_1: survey_response[i]['ampac_q1_dd14'],
                      question_2: survey_response[i]['ampac_q2_dd14'],
                      question_3: survey_response[i]['ampac_q3_dd14'],
                      question_4: survey_response[i]['ampac_q4_dd14'],
                      question_5: survey_response[i]['ampac_q5_dd14'],
                      question_6: survey_response[i]['ampac_q6_dd14']
                    },
                    {
                      day: "day 30",
                      question_1: survey_response[i]['ampac_q1_dd30'],
                      question_2: survey_response[i]['ampac_q2_dd30'],
                      question_3: survey_response[i]['ampac_q3_dd30'],
                      question_4: survey_response[i]['ampac_q4_dd30'],
                      question_5: survey_response[i]['ampac_q5_dd30'],
                      question_6: survey_response[i]['ampac_q6_dd30']
                    }
                  ],
                  base_phq: [
                    {
                      day: "presurgery",
                      response: survey_response[i]['base_phq9_pss']
                    },
                    {
                      day: "day of discharge",
                      response: survey_response[i]['base_phq9_dod']
                    },
                    {
                      day: "day 1",
                      response: survey_response[i]['base_phq9_dd1']
                    },
                    {
                      day: "day 7",
                      response: survey_response[i]['base_phq9_dd7']
                    },
                    {
                      day: "day 14",
                      response: survey_response[i]['base_phq9_dd14']
                    },
                    {
                      day: "day 30",
                      response: survey_response[i]['base_phq9_dd30']
                    }
                  ],
                  follow_up: [
                    {
                      day: "day of discharge",
                      question_1: survey_response[i]['fu_q1_dod'],
                      question_2: survey_response[i]['fu_q2_dod']
                    },
                    {
                      day: "day 3",
                      question_1: survey_response[i]['fu_q1_dd3'],
                      question_2: survey_response[i]['fu_q2_dd3']
                    }
                  ],
                  peg: [
                    {
                      day: "presurgery",
                      question_1: survey_response[i]['peg_q1_pss'],
                      question_2: survey_response[i]['peg_q1_pss'],
                      question_3: survey_response[i]['peg_q1_pss']
                    },
                    {
                      day: "day of discharge",
                      question_1: survey_response[i]['peg_q1_dod'],
                      question_2: survey_response[i]['peg_q2_dod'],
                      question_3: survey_response[i]['peg_q3_dod']
                    },
                    {
                      day: "day 1",
                      question_1: survey_response[i]['peg_q1_dd1'],
                      question_2: survey_response[i]['peg_q2_dd1'],
                      question_3: survey_response[i]['peg_q3_dd1']
                    },
                    {
                      day: "day 14",
                      question_1: survey_response[i]['peg_q1_dd14'],
                      question_2: survey_response[i]['peg_q2_dd14'],
                      question_3: survey_response[i]['peg_q3_dd14']
                    },
                    {
                      day: "day 30",
                      question_1: survey_response[i]['peg_q1_dd30'],
                      question_2: survey_response[i]['peg_q2_dd30'],
                      question_3: survey_response[i]['peg_q3_dd30']
                    }
                  ],
                  phq: [
                    {
                      day: "presurgery",
                      question_1: survey_response[i]['phq1_pss'],
                      question_2: survey_response[i]['phq2_pss'],
                      question_3: survey_response[i]['phq3_pss'],
                      question_4: survey_response[i]['phq4_pss'],
                      question_5: survey_response[i]['phq5_pss'],
                      question_6: survey_response[i]['phq6_pss'],
                      question_7: survey_response[i]['phq7_pss'],
                      question_8: survey_response[i]['phq8_pss'],
                      question_9: survey_response[i]['phq9_pss'],
                      question_10: survey_response[i]['phq9_pss']
                    },
                    {
                      day: "day of discharge",
                      question_1: survey_response[i]['phq1_dod'],
                      question_2: survey_response[i]['phq2_dod'],
                      question_3: survey_response[i]['phq3_dod'],
                      question_4: survey_response[i]['phq4_dod'],
                      question_5: survey_response[i]['phq5_dod'],
                      question_6: survey_response[i]['phq6_dod'],
                      question_7: survey_response[i]['phq7_dod'],
                      question_8: survey_response[i]['phq8_dod'],
                      question_9: survey_response[i]['phq9_dod'],
                      question_10: survey_response[i]['phq9_dod']
                    },
                    {
                      day: "day 1",
                      question_1: survey_response[i]['phq1_dd1'],
                      question_2: survey_response[i]['phq2_dd1'],
                      question_3: survey_response[i]['phq3_dd1'],
                      question_4: survey_response[i]['phq4_dd1'],
                      question_5: survey_response[i]['phq5_dd1'],
                      question_6: survey_response[i]['phq6_dd1'],
                      question_7: survey_response[i]['phq7_dd1'],
                      question_8: survey_response[i]['phq8_dd1'],
                      question_9: survey_response[i]['phq9_dd1'],
                      question_10: survey_response[i]['phq9_dd1']
                    },
                    {
                      day: "day 7",
                      question_1: survey_response[i]['phq1_dd7'],
                      question_2: survey_response[i]['phq2_dd7'],
                      question_3: survey_response[i]['phq3_dd7'],
                      question_4: survey_response[i]['phq4_dd7'],
                      question_5: survey_response[i]['phq5_dd7'],
                      question_6: survey_response[i]['phq6_dd7'],
                      question_7: survey_response[i]['phq7_dd7'],
                      question_8: survey_response[i]['phq8_dd7'],
                      question_9: survey_response[i]['phq9_dd7'],
                      question_10: survey_response[i]['phq9_dd7']
                    },
                    {
                      day: "day 14",
                      question_1: survey_response[i]['phq1_dd14'],
                      question_2: survey_response[i]['phq2_dd14'],
                      question_3: survey_response[i]['phq3_dd14'],
                      question_4: survey_response[i]['phq4_dd14'],
                      question_5: survey_response[i]['phq5_dd14'],
                      question_6: survey_response[i]['phq6_dd14'],
                      question_7: survey_response[i]['phq7_dd14'],
                      question_8: survey_response[i]['phq8_dd14'],
                      question_9: survey_response[i]['phq9_dd14'],
                      question_10: survey_response[i]['phq9_dd14']
                    },
                    {
                      day: "day 30",
                      question_1: survey_response[i]['phq1_dd30'],
                      question_2: survey_response[i]['phq2_dd30'],
                      question_3: survey_response[i]['phq3_dd30'],
                      question_4: survey_response[i]['phq4_dd30'],
                      question_5: survey_response[i]['phq5_dd30'],
                      question_6: survey_response[i]['phq6_dd30'],
                      question_7: survey_response[i]['phq7_dd30'],
                      question_8: survey_response[i]['phq8_dd30'],
                      question_9: survey_response[i]['phq9_dd30'],
                      question_10: survey_response[i]['phq9_dd30']
                    }
                  ],
                  q_score: [
                    {
                      day: "presurgery",
                      question_1: survey_response[i]['q1_score_pss'],
                      question_2: survey_response[i]['q2_score_pss'],
                      question_3: survey_response[i]['q3_score_pss'],
                      question_4: survey_response[i]['q4_score_pss'],
                      question_5: survey_response[i]['q5_score_pss'],
                      question_6: survey_response[i]['q6_score_pss'],
                      question_7: survey_response[i]['q7_score_pss'],
                      question_8: survey_response[i]['q8_score_pss'],
                      question_9: survey_response[i]['q9_score_pss']
                    },
                    {
                      day: "day of discharge",
                      question_1: survey_response[i]['q1_score_dod'],
                      question_2: survey_response[i]['q2_score_dod'],
                      question_3: survey_response[i]['q3_score_dod'],
                      question_4: survey_response[i]['q4_score_dod'],
                      question_5: survey_response[i]['q5_score_dod'],
                      question_6: survey_response[i]['q6_score_dod'],
                      question_7: survey_response[i]['q7_score_dod'],
                      question_8: survey_response[i]['q8_score_dod'],
                      question_9: survey_response[i]['q9_score_dod']
                    },
                    {
                      day: "day 1",
                      question_1: survey_response[i]['q1_score_dd1'],
                      question_2: survey_response[i]['q2_score_dd1'],
                      question_3: survey_response[i]['q3_score_dd1'],
                      question_4: survey_response[i]['q4_score_dd1'],
                      question_5: survey_response[i]['q5_score_dd1'],
                      question_6: survey_response[i]['q6_score_dd1'],
                      question_7: survey_response[i]['q7_score_dd1'],
                      question_8: survey_response[i]['q8_score_dd1'],
                      question_9: survey_response[i]['q9_score_dd1']
                    },
                    {
                      day: "day 7",
                      question_1: survey_response[i]['q1_score_dd7'],
                      question_2: survey_response[i]['q2_score_dd7'],
                      question_3: survey_response[i]['q3_score_dd7'],
                      question_4: survey_response[i]['q4_score_dd7'],
                      question_5: survey_response[i]['q5_score_dd7'],
                      question_6: survey_response[i]['q6_score_dd7'],
                      question_7: survey_response[i]['q7_score_dd7'],
                      question_8: survey_response[i]['q8_score_dd7'],
                      question_9: survey_response[i]['q9_score_dd7']
                    },
                    {
                      day: "day 14",
                      question_1: survey_response[i]['q1_score_dd14'],
                      question_2: survey_response[i]['q2_score_dd14'],
                      question_3: survey_response[i]['q3_score_dd14'],
                      question_4: survey_response[i]['q4_score_dd14'],
                      question_5: survey_response[i]['q5_score_dd14'],
                      question_6: survey_response[i]['q6_score_dd14'],
                      question_7: survey_response[i]['q7_score_dd14'],
                      question_8: survey_response[i]['q8_score_dd14'],
                      question_9: survey_response[i]['q9_score_dd14']
                    },
                    {
                      day: "day 30",
                      question_1: survey_response[i]['q1_score_dd30'],
                      question_2: survey_response[i]['q2_score_dd30'],
                      question_3: survey_response[i]['q3_score_dd30'],
                      question_4: survey_response[i]['q4_score_dd30'],
                      question_5: survey_response[i]['q5_score_dd30'],
                      question_6: survey_response[i]['q6_score_dd30'],
                      question_7: survey_response[i]['q7_score_dd30'],
                      question_8: survey_response[i]['q8_score_dd30'],
                      question_9: survey_response[i]['q9_score_dd30']
                    }
                  ],
                  wound_pictures: [
                    {
                      day: "day of discharge",
                      image: survey_response[i]['wound_pic_dod']
                    },
                    {
                      day: "day 2",
                      image: survey_response[i]['wound_pic_dd2']
                    },
                    {
                      day: "day 4",
                      image: survey_response[i]['wound_pic_dd4']
                    },
                    {
                      day: "day 7",
                      image: survey_response[i]['wound_pic_dd7']
                    },
                    {
                      day: "day 14",
                      image: survey_response[i]['wound_pic_dd14']
                    }
                  ],
                  wound_questions: [
                    {
                      day: "day of discharge",
                      question_1: survey_response[i]['wound_q1_dod'],
                      question_2: survey_response[i]['wound_q2_dod'],
                      question_3: survey_response[i]['wound_q3_dod'],
                      question_4: survey_response[i]['wound_q4_dod'],
                      question_5: survey_response[i]['wound_q5_dod'],
                      question_6: survey_response[i]['wound_q6_dod'],
                      question_7: {
                        part_1: survey_response[i]['wound_q7_dod'],
                        part_2: survey_response[i]['wound_q7p1_dod'],
                        part_3: survey_response[i]['wound_q7p2_dod'],
                        part_4: survey_response[i]['wound_q7p3_dod']
                      },
                      question_8: survey_response[i]['wound_q8_dod']
                    },
                    {
                      day: "day 2",
                      question_1: survey_response[i]['wound_q1_dd2'],
                      question_2: survey_response[i]['wound_q2_dd2'],
                      question_3: survey_response[i]['wound_q3_dd2'],
                      question_4: survey_response[i]['wound_q4_dd2'],
                      question_5: survey_response[i]['wound_q5_dd2'],
                      question_6: survey_response[i]['wound_q6_dd2'],
                      question_7: {
                        part_1: survey_response[i]['wound_q7_dd2'],
                        part_2: survey_response[i]['wound_q7p1_dd2'],
                        part_3: survey_response[i]['wound_q7p2_dd2'],
                        part_4: survey_response[i]['wound_q7p3_dd2']
                      },
                      question_8: survey_response[i]['wound_q8_dd2']
                    },
                    {
                      day: "day 4",
                      question_1: survey_response[i]['wound_q1_dd4'],
                      question_2: survey_response[i]['wound_q2_dd4'],
                      question_3: survey_response[i]['wound_q3_dd4'],
                      question_4: survey_response[i]['wound_q4_dd4'],
                      question_5: survey_response[i]['wound_q5_dd4'],
                      question_6: survey_response[i]['wound_q6_dd4'],
                      question_7: {
                        part_1: survey_response[i]['wound_q7_dd4'],
                        part_2: survey_response[i]['wound_q7p1_dd4'],
                        part_3: survey_response[i]['wound_q7p2_dd4'],
                        part_4: survey_response[i]['wound_q7p3_dd4']
                      },
                      question_8: survey_response[i]['wound_q8_dd4']
                    },
                    {
                      day: "day 7",
                      question_1: survey_response[i]['wound_q1_dd7'],
                      question_2: survey_response[i]['wound_q2_dd7'],
                      question_3: survey_response[i]['wound_q3_dd7'],
                      question_4: survey_response[i]['wound_q4_dd7'],
                      question_5: survey_response[i]['wound_q5_dd7'],
                      question_6: survey_response[i]['wound_q6_dd7'],
                      question_7: {
                        part_1: survey_response[i]['wound_q7_dd7'],
                        part_2: survey_response[i]['wound_q7p1_dd7'],
                        part_3: survey_response[i]['wound_q7p2_dd7'],
                        part_4: survey_response[i]['wound_q7p3_dd7']
                      },
                      question_8: survey_response[i]['wound_q8_dd7']
                    },
                    {
                      day: "day 14",
                      question_1: survey_response[i]['wound_q1_dd14'],
                      question_2: survey_response[i]['wound_q2_dd14'],
                      question_3: survey_response[i]['wound_q3_dd14'],
                      question_4: survey_response[i]['wound_q4_dd14'],
                      question_5: survey_response[i]['wound_q5_dd14'],
                      question_6: survey_response[i]['wound_q6_dd14'],
                      question_7: {
                        part_1: survey_response[i]['wound_q7_dd14'],
                        part_2: survey_response[i]['wound_q7p1_dd14'],
                        part_3: survey_response[i]['wound_q7p2_dd14'],
                        part_4: survey_response[i]['wound_q7p3_dd14']
                      },
                      question_8: survey_response[i]['wound_q8_dd14']
                    },
                  ],
                  presurgery_complete: survey_response[i]['presurgery_surveys_ba77_complete'],
                  dod_complete : survey_response[i]['day_of_discharge_surveys_complete'],
                  day1_complete: survey_response[i]['discharge_day_1_complete'],
                  day2_complete: survey_response[i]['discharge_day_2_complete'],
                  day3_complete: survey_response[i]['discharge_day_3_complete'],
                  day4_complete: survey_response[i]['discharge_day_4_complete'],
                  day7_complete: survey_response[i]['discharge_day_7_complete'],
                  day14_complete: survey_response[i]['discharge_day_14_complete'],
                  day30_complete: survey_response[i]['discharge_day_30_complete']
                }
              this.patient_information.push(temp_patient)
             
            }
          )          
        } 
      },
      (error: any) => {
        console.log(error)
      }
    )
    console.log(this.patient_information)


  }

  test(patient:PatientInformation){
    sessionStorage.clear()
    sessionStorage.setItem('patient',JSON.stringify(patient))
    this.router.navigateByUrl('/main-doctors/survey-results')
    

  }
  
}

