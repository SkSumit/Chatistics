import os
import pyrebase

config = {
    "apiKey": os.environ.get("FIREBASE_API_KEY"),
    "authDomain": os.environ.get("FIREBASE_AUTH_DOMAIN"),
    "databaseURL": os.environ.get("FIREBASE_DATABASE_URL"),
    "storageBucket": os.environ.get("FIREBASE_STORAGE_BUCKET")
}

firebase = pyrebase.initialize_app(config)


def db():
    return firebase.database()


# results = db.child("users").push("dadadd")
# print(results)
