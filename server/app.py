from distutils.log import Log
import os
import sys
import pymongo
import tornado.ioloop
import tornado.httpserver

from handlers.LoginHandler import LoginHandler
from handlers.SurveyHandler import SurveyHandler
from handlers.AppointmentHandler import AppointmentHandler
from handlers.InstructionHandler import InstructionHandler
from handlers.ChatHandler import ChatHandler
from handlers.UserRegistrationHandler import UserRegistrationHandler
from handlers.GetSurveyHandler import GetSurveyHandler
from handlers.GetPatientsHandler import GetPatientsHandler


sys.path.append(os.path.dirname(os.path.realpath(__file__)))

username = "TMeneses1002"
password = "ThadeusVASDA"
client = pymongo.MongoClient("mongodb+srv://" + username + ":" + password + "@cluster0.4kjg3.mongodb.net/VASDA?retryWrites=true&w=majority",tls=True, tlsAllowInvalidCertificates=True)
db = client['VASDA']

            
def setup_app():

    settings = {
        "static_path": os.path.join(os.path.dirname(__file__), "static")
    }

    handlers = [
        (r'/login', LoginHandler, dict(db=db)),
        (r'/doctors-login', LoginHandler, dict(db=db)),
        (r'/main-patients/question2', SurveyHandler, dict(db=db)),
        (r'/main-patients/appointments',AppointmentHandler, dict(db=db)),
        (r'/main-patients/discharge-instructions',InstructionHandler, dict(db=db)),
        (r'/main-doctors/discharge-instructions',GetPatientsHandler, dict(db=db)),
        (r'/main-doctors/appointments',AppointmentHandler, dict(db=db)),
        (r'/main-doctors/add-notes',GetPatientsHandler, dict(db=db)),
        (r'/user-registration', UserRegistrationHandler, dict(db=db)),
        (r'/main-doctors/survey-results', GetSurveyHandler, dict(db=db)),
        (r'/main-doctors/chat',ChatHandler,dict(db=db)),
        (r'/main-patients/chat',ChatHandler,dict(db=db))
     ]

    return tornado.web.Application(
        handlers=handlers,
        **settings,
        autoreload=True
    )

if __name__ == '__main__':

    app = setup_app()
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(8000)
    print("The server is listening on port {8000}\n")
    tornado.ioloop.IOLoop.current().start()