import json
from urllib import response
import tornado
from tornado import web
from tornado import escape
from datetime import date
from bson import json_util

class GetSurveyHandler(web.RequestHandler):

    def initialize(self, db):

        self.set_header("Access-Control-Allow-Origin", "http://localhost:8100")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

        self._db = db

    def post(self):

        survey_collection = self._db['surveys']
        patient_collection = self._db['patients']
        doctor = tornado.escape.json_decode(self.request.body)
        
        if doctor is not None:

            patients = list(patient_collection.find({'dID':doctor['_id']} ))

            patient_list=[]

            for patient in patients:
                #survey does not exist
                dne = dict()
                patient_survey = survey_collection.find_one({'date':str(date.today()),'pID':patient['pID']})
                if patient_survey:
                    patient_survey['name'] = patient['fName'] + " " + patient['lName']
                    patient_list.append(patient_survey)
                else:
                    dne['name'] = patient['fName'] + " " + patient['lName']
                    dne['sore']='n/a'
                    dne['fever'] = 'n/a'
                    patient_list.append(dne)

            
                
            #query = list(survey_collection.find( {'dID':doctor['_id']} ) 
            response = json.dumps(patient_list,default=json_util.default)
            created_response = {'METHOD': 'Put', 'HTTP STATUS': 201, 'Surveys': json.loads(response)}
 
            self.write(created_response)

        else:

            invalid_respones = {'METHOD': 'POST', 'HTTP STATUS': 409, 'RESPONSE': 'User already exists'}
            self.write(invalid_respones)

    def options(self, *args):

        self.set_status(204)
        self.finish()