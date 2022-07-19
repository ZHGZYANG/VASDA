import collections
import tornado
from tornado import web
from tornado import escape
from datetime import date
from bson.objectid import ObjectId

class SurveyHandler(web.RequestHandler):

    def initialize(self, db):

        self.set_header("Access-Control-Allow-Origin", "http://localhost:8100")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

        self._db = db

    def post(self):

        collection = self._db['PATIENT_HEALTH']
        survey = tornado.escape.json_decode(self.request.body)

        db_survey={
            "S_id":ObjectId(),
            "Fever":survey['Q1_Result'],
            "Sore":survey['Q2_Result'],
            "Date_Taken":survey['date']
        }

        if(survey):
            collection.update_one(
                {'P_id':ObjectId(survey['P_id'])},

                {"$push":{'Survey_Array':db_survey}}
            )


            created_response = {'METHOD': 'Put', 'HTTP STATUS': 201, 'RESPONSE': 'Survey'}
                
            self.write(created_response)

        else:

            invalid_respones = {'METHOD': 'POST', 'HTTP STATUS': 409, 'RESPONSE': 'User already exists'}
            self.write(invalid_respones)

    def options(self, *args):

        self.set_status(204)
        self.finish()