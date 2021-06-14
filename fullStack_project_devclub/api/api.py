import json
from flask import Flask, request
from db import SQLiteConnection

app = Flask(__name__)
sqlite_connection = SQLiteConnection()

@app.route("/")
def index():
    # return json.loads("Hello World!")
    return json.dumps({"msg": "hey gal"})

# @app.route('/api/add_to_favorites', method=['POST'])
def add_to_favorites():
    # TODO
    pass
   

# @app.route('/api/get_favorites', method=['GET'])
def get_favorites():
    # TODO
    pass

# @app.route("/get_movie")
# def index():
#     # return json.loads("Hello World!")
#     pass    
