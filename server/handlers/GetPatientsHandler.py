import json
import tornado
from tornado import web
from tornado import escape
from datetime import date
from bson import json_util

class GetPatientsHandler(web.RequestHandler):

    def initialize(self, db):

        self.set_header("Access-Control-Allow-Origin", "http://localhost:8100")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

        self._db = db

    def post(self):

        collection = self._db['patients']
        user = tornado.escape.json_decode(self.request.body)


        
        if user is not None:
            apps = list(collection.find( {'dID':user['_id']} ) )
            patients = json.dumps(apps,default=json_util.default)
            
            created_response = {'METHOD': 'Put', 'HTTP STATUS': 201, 'Patients': json.loads(patients)}
            self.write(created_response)

        else:

            invalid_respones = {'METHOD': 'POST', 'HTTP STATUS': 409, 'RESPONSE': 'ERROR'}
            self.write(invalid_respones)

    def options(self, *args):

        self.set_status(204)
        self.finish()