import { AMPACQuestions } from "./ampac"
import { BasePHQ9 } from "./base_phq"
import { FollowUp } from "./follow_up"
import { PEG } from "./peg"
import { PHQ } from "./phq"
import { QScore } from "./q_score"
import { WoundPicture } from "./wound_picture"
import { WoundQuestion } from "./wound_question"
export interface PatientInformation {
    name: string,
    id: string,
    birthday: string,
    address: string,
    email: string,
    surgery_date: string,
    days_since_surgery: number,
    ampac: AMPACQuestions[],
    base_phq: BasePHQ9[],
    follow_up: FollowUp[],
    peg: PEG[],
    phq: PHQ[],
    q_score: QScore[],
    wound_pictures: WoundPicture[],
    wound_questions: WoundQuestion[]
    presurgery_complete: any,
    dod_complete?: any,
    day1_complete?: any,
    day2_complete?: any,
    day3_complete?: any,
    day4_complete?: any,
    day7_complete?: any,
    day14_complete?: any,
    day30_complete?: any
  }