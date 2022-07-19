import json
from pydoc import visiblename
import tornado
from tornado import web
from tornado import escape
from datetime import date
from bson import json_util
from bson.objectid import ObjectId

class AppointmentHandler(web.RequestHandler):

    def initialize(self, db):

        self.set_header("Access-Control-Allow-Origin", "http://localhost:8100")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

        self._db = db

    def post(self):


        collection = self._db['PATIENT_RECORDS']
        user = tornado.escape.json_decode(self.request.body)
        
        db_user = collection.find_one( {'P_id':ObjectId(user['P_id'])})

        if(db_user is not None): #load the previous visits and future appointments into user and send to client
            
            appointments = json.dumps(db_user['Appointment_Array'],default=json_util.default)
            visits = json.dumps(db_user['Visit_Array'],default=json_util.default)
            print(appointments)
            created_response = {'METHOD': 'Put', 'HTTP STATUS': 201, 'Appointments': json.loads(appointments), 'Visits':json.loads(visits)}
            self.write(created_response)
        

        else:
            invalid_response = {'HTTP STATUS': 401}
            self.write(invalid_response)

        
        #if user is not None:
        #    if 'doctor' in user:
        #        apps = list(collection.find( {'dID':user['_id']} ) )
        #    else:
        #         apps = list(collection.find( {'pID':user['_id']} ) )
        #    appointments = json.dumps(apps,default=json_util.default)
            
        #    created_response = {'METHOD': 'Put', 'HTTP STATUS': 201, 'Appointments': json.loads(appointments)}
        #    self.write(created_response)

        #else:

        #   invalid_respones = {'METHOD': 'POST', 'HTTP STATUS': 409, 'RESPONSE': 'ERROR'}
        #    self.write(invalid_respones)

    def options(self, *args):

        self.set_status(204)
        self.finish()