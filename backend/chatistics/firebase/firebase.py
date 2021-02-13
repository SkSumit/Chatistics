import pyrebase
import os
from dotenv import load_dotenv
load_dotenv()


config = {
    "apiKey": os.environ.get("FIREBASE_API_KEY"),
    "authDomain": os.environ.get("FIREBASE_AUTH_DOMAIN"),
    "databaseURL": os.environ.get("FIREBASE_DATABASE_URL"),
    "storageBucket": os.environ.get("FIREBASE_STORAGE_BUCKET")
}


firebase = pyrebase.initialize_app(config)
db = firebase.database()
