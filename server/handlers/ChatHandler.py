from ast import arguments
from email import message
import json
from pyexpat.errors import messages
import tornado
from tornado import web
from tornado import escape
from datetime import date
from bson import json_util
from bson.objectid import ObjectId


class ChatHandler(web.RequestHandler):

    def initialize(self, db):

        self.set_header("Access-Control-Allow-Origin", "http://localhost:8100")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

        self._db = db

    def get(self):

        collection = self._db['PATIENT_RECORDS']
        user = self.request.query
        print(user)
        

        db_user = collection.find_one( {'P_id':ObjectId(user[4:])})

        if db_user:
            
            messages = json.dumps(db_user['Chat_Array'],default=json_util.default)
            created_response = {'METHOD': 'Get', 'HTTP STATUS': 201, 'Messages':json.loads(messages)}
            self.write(created_response)
        else:
            created_response = {'METHOD': 'Get', 'HTTP STATUS': 201}
            self.write("FAILED")
        


    def post(self):

        collection = self._db['messages']
        request = tornado.escape.json_decode(self.request.body)
        
        message = {
            'dID':request['dID'],
            'pID':request['pID'],
            'message':request['message'],
            'createdAt':request['createdAt']
        }
        check = collection.insert_one(message)
        if(check is not None):

            valid_insertion = {'HTTP STATUS': 201}
            self.write(valid_insertion)
        else:
            invalid_respones = {'METHOD': 'POST', 'HTTP STATUS': 409, 'RESPONSE': 'ERROR'}
            self.write(invalid_respones)

    def options(self, *args):

        self.set_status(204)
        self.finish()