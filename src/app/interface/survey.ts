import { AnonymousSubject } from "rxjs/internal/Subject"

export interface Presurgery {
    recordid_pss: any
    patientid_pss: any
    ampac_q1_pss: any
    ampac_q2_pss: any
    ampac_q3_pss: any
    ampac_q4_pss: any
    ampac_q5_pss: any
    ampac_q6_pss: any
    peg_q1_pss: any
    peg_q2_pss: any
    peg_q3_pss: any
    phq1_pss: any
    phq2_pss: any
    phq3_pss: any
    phq4_pss: any
    phq5_pss: any
    phq6_pss: any
    phq7_pss: any
    phq8_pss: any
    phq9_pss: any
    phq10_pss: any
    presurgery_surveys_ba77_complete: any
    redcap_event_name: any
}

export interface Dod{
    recordid_pss: any,
    ampac_patientid_dod:any,
    ampac_q1_dod: any,
    ampac_q2_dod: any,
    ampac_q3_dod: any,
    ampac_q4_dod: any,
    ampac_q5_dod: any,
    ampac_q6_dod: any,
    peg_q1_dod: any,
    peg_q2_dod: any,
    peg_q3_dod: any,
    phq1_dod: any,
    phq2_dod: any,
    phq3_dod: any,
    phq4_dod: any,
    phq5_dod: any,
    phq6_dod: any,
    phq7_dod: any,
    phq8_dod: any,
    phq9_dod: any,
    phq10_dod: any,
    wound_pic_dod: any,
    wound_q1_dod: any,
    wound_q2_dod: any,
    wound_q3_dod: any,
    wound_q4_dod: any,
    wound_q5_dod: any,
    wound_q6_dod: any,
    wound_q7_dod: any,
    wound_q7p1_dod?:any,
    wound_q7p2_dod?:any,
    wound_q7p3_dod?:any,
    wound_q8_dod:any,
    fu_q1_dod:any,
    fu_q2_dod:any,
    day_of_discharge_surveys_complete: any,
    redcap_event_name: any
}

export interface Day1{
    recordid_pss: any,
    patientid_dd1: any,
    ampac_q1_dd1: any,
    ampac_q2_dd1: any,
    ampac_q3_dd1: any,
    ampac_q4_dd1: any,
    ampac_q5_dd1: any,
    ampac_q6_dd1: any,
    peg_q1_dd1: any,
    peg_q2_dd1: any,
    peg_q3_dd1: any,
    phq1_dd1: any,
    phq2_dd1: any,
    phq3_dd1: any,
    phq4_dd1: any,
    phq5_dd1: any,
    phq6_dd1: any,
    phq7_dd1: any,
    phq8_dd1: any,
    phq9_dd1: any,
    phq10_dd1: any,
    discharge_day_1_complete: any,
    redcap_event_name: any
}

export interface Day2{
    recordid_pss: any,
    patientid_dd2: any,
    wound_pic_dd2: any,
    wound_q1_dd2: any,
    wound_q2_dd2: any,
    wound_q3_dd2: any,
    wound_q4_dd2: any,
    wound_q5_dd2: any,
    wound_q6_dd2: any,
    wound_q7_dd2: any,
    wound_q7p1_dd2?:any,
    wound_q7p2_dd2?: any,
    wound_q7p3_dd2?: any,
    wound_q8_dd2: any,
    discharge_day_2_complete: any,
    redcap_event_name: any
}

export interface Day3{
    recordid_pss: any,
    patientid_dd3: any,
    fu_q1_dd3: any,
    fu_q2_dd3: any,
    discharge_day_3_complete: any,
    redcap_event_name: any
}

export interface Day4{
    recordid_pss: any,
    patientid_dd4: any,
    wound_pic_dd4: any,
    wound_q1_dd4: any,
    wound_q2_dd4: any,
    wound_q3_dd4: any,
    wound_q4_dd4: any,
    wound_q5_dd4: any,
    wound_q6_dd4: any,
    wound_q7_dd4: any,
    wound_q7p1_dd4?: any,
    wound_q7p2_dd4?: any,
    wound_q7p3_dd4?: any,
    wound_q8_dd4: any,
    discharge_day_4_complete: any,
    redcap_event_name: any
}

export interface Day7{
    recordid_pss: any,
    patientid_dd7: any,
    ampac_q1_dd7: any,
    ampac_q2_dd7: any,
    ampac_q3_dd7: any,
    ampac_q4_dd7: any,
    ampac_q5_dd7: any,
    ampac_q6_dd7: any,
    phq1_dd7: any,
    phq2_dd7: any,
    phq3_dd7: any,
    phq4_dd7: any,
    phq5_dd7: any,
    phq6_dd7: any,
    phq7_dd7: any,
    phq8_dd7: any,
    phq9_dd7: any,
    phq10_dd7: any,
    wound_pic_dd7: any,
    wound_q1_dd7: any,
    wound_q2_dd7: any,
    wound_q3_dd7: any,
    wound_q4_dd7: any,
    wound_q5_dd7: any,
    wound_q6_dd7: any,
    wound_q7_dd7: any,
    wound_q7p1_dd7?: any,
    wound_q7p2_dd7?: any,
    wound_q7p3_dd7?: any,
    wound_q8_dd7: any,
    discharge_day_7_complete: any,
    redcap_event_name: any
}

export interface Day14{
    recordid_pss: any,
    patientid_dd14: any,
    ampac_q1_dd14: any,
    ampac_q2_dd14: any,
    ampac_q3_dd14: any,
    ampac_q4_dd14: any,
    ampac_q5_dd14: any,
    ampac_q6_dd14: any,
    peg_q1_dd14: any,
    peg_q2_dd14: any,
    peg_q3_dd14: any,
    phq1_dd14: any,
    phq2_dd14: any,
    phq3_dd14: any,
    phq4_dd14: any,
    phq5_dd14: any,
    phq6_dd14: any,
    phq7_dd14: any,
    phq8_dd14: any,
    phq9_dd14: any,
    phq10_dd14: any,
    wound_pic_dd14: any,
    wound_q1_dd14: any,
    wound_q2_dd14: any,
    wound_q3_dd14: any,
    wound_q4_dd14: any,
    wound_q5_dd14: any,
    wound_q6_dd14: any,
    wound_q7_dd14: any,
    wound_q7p1_dd14?: any,
    wound_q7p2_dd14?: any,
    wound_q7p3_dd14?: any,
    wound_q8_dd14: any,
    discharge_day_14_complete: any,
    redcap_event_name: any
}

export interface Day30{
    recordid_pss: any,
    patientid_dd30: any,
    ampac_q1_dd30: any,
    ampac_q2_dd30: any,
    ampac_q3_dd30: any,
    ampac_q4_dd30: any,
    ampac_q5_dd30: any,
    ampac_q6_dd30: any,
    peg_q1_dd30: any,
    peg_q2_dd30: any,
    peg_q3_dd30: any,
    phq1_dd30: any,
    phq2_dd30: any,
    phq3_dd30: any,
    phq4_dd30: any,
    phq5_dd30: any,
    phq6_dd30: any,
    phq7_dd30: any,
    phq8_dd30: any,
    phq9_dd30: any,
    phq10_dd30: any,
    discharge_day_30_complete: any,
    redcap_event_name: any
}