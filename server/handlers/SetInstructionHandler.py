import json
import tornado
from tornado import web
from tornado import escape
from datetime import date
from bson import json_util

class SetInstructionHandler(web.RequestHandler):

    def initialize(self, db):

        self.set_header("Access-Control-Allow-Origin", "http://localhost:8100")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

        self._db = db

    def post(self):

        collection = self._db['discharge instructions']
        user = tornado.escape.json_decode(self.request.body)

        
        if user is not None:
            collection.update_one({'pID':user[0]},{"$set": {"instruction": user[1]}})
            
            created_response = {'METHOD': 'Put', 'HTTP STATUS': 201}
            self.write(created_response)

        else:

            invalid_respones = {'METHOD': 'POST', 'HTTP STATUS': 409, 'RESPONSE': 'ERROR'}
            self.write(invalid_respones)

    def options(self, *args):

        self.set_status(204)
        self.finish()