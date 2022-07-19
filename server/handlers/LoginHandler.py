import collections
import tornado
import tornado.httpserver
from tornado import web
import pymongo
import json
from bson import json_util
from bson import ObjectId


class LoginHandler(web.RequestHandler):

    def initialize(self, db):

        self.set_header("Access-Control-Allow-Origin", "http://localhost:8100")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

        self._db = db

    def post(self):

        login = False

        Chats = []
        Appointments = []
        Visits = []
        Surveys = []
        Wounds = []

        temp = None

        valid_credential = {'HTTP STATUS': 201, 
            'USER': {'P_id': None, 'FName': None, 'LName': None, 'Email': None, 'Profile_Picture': None},
            'HEALTH': {'Survey_Status': None, 'Survey_Array': None, 'Wound_Status': None, 'Wound_Array': None},
            'RECORD': {'Discharge_Date': None, 'Discharge_Instructions': None, 'Operation': None, 'Appointment_Array': None,
                'Chat_Array': None, 'Visit_Array': None}
            }
        invalid_credential = {'HTTP STATUS': 401}

        user_collection = self._db['PATIENT_INFORMATION']
        doctor_collection = self._db['DOCTOR_INFORMATION']
        record_collection = self._db['PATIENT_RECORDS']
        health_collection = self._db['PATIENT_HEALTH']

        user = tornado.escape.json_decode(self.request.body)

        if(len(user) == 2):
            login = True
        

        check_user = user_collection.find_one({'Username': user['Username'] })
        check_doctor = doctor_collection.find_one({'Username': user['Username']})
        if(check_user is not None):

            #Invalid Password
            if(check_user['Password'] != user['Password']):
                invalid_credential['HTTP STATUS'] = 409
                self.write(invalid_credential)

            #Valid user credentials load all data about the user
            else:
                temp = json.dumps(check_user,default=json_util.default)
                valid_credential['USER'] = json.loads(temp)

                #grabbing the patient id to query the record collections
                P_id = ObjectId(valid_credential['USER']['P_id']['$oid'])

                records = record_collection.find_one( {'P_id':P_id})
                temp_record = json.dumps(records,default=json_util.default)

                valid_credential['RECORD']=json.loads(temp_record)
                #making sure that the patient information is parsing correctly
                self.write(valid_credential)
        
        elif(check_doctor is not None):

            if(check_doctor['Password'] != user['Password']):
                invalid_credential['HTTP STATUS'] = 409
                self.write(invalid_credential)
            else:
                temp = json.dumps(check_doctor,default=json_util.default)
                valid_credential['USER'] = json.loads(temp)

                self.write(valid_credential)

        #USER REGISTRATION
        #No username found
        else:
            if(login == False):
                check_email = user_collection.find_one({'Email': user['Email']})

                #Found a user with same email, return error
                if(check_email is not None):
                    invalid_credential['HTTP STATUS'] = 410
                    self.write(invalid_credential)
                else:
                    invalid_credential['HTTP STATUS'] = 401
                    self.write(invalid_credential)
                

            else: #LOGIN: Return Invalid credential status 401
                invalid_credential['HTTP STATUS'] = 401
                self.write(invalid_credential)
                

    def options(self, *args):

        self.set_status(204)
        self.finish()