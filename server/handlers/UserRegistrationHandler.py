import tornado
from tornado import web
import tornado.httpserver
import pymongo


class UserRegistrationHandler(web.RequestHandler):

    def initialize(self, db):

        self.set_header("Access-Control-Allow-Origin", "http://localhost:8100")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

        self._db = db

    def post(self):

        collection = self._db['user_login_information']

        new_user = tornado.escape.json_decode(self.request.body)

        check_insert = collection.insert_one(new_user)
        if(check_insert is not None):

            valid_insertion = {'HTTP STATUS': 201}
            self.write(valid_insertion)
        else:
            invalid_insertion = {'HTTP STATUS': 409}
            self.write(invalid_insertion)
        
    def options(self, *args):

        self.set_status(204)
        self.finish()