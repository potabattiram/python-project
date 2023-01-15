from bson import json_util, ObjectId
import json
from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient(
    "mongodb://ameychilka:AmeyChilka@ac-7swxiyz-shard-00-00.rmcm2dj.mongodb.net:27017,"
    "ac-7swxiyz-shard-00-01.rmcm2dj.mongodb.net:27017,"
    "ac-7swxiyz-shard-00-02.rmcm2dj.mongodb.net:27017/?ssl=true&replicaSet=atlas-k31aqw-shard-0&authSource=admin"
    "&retryWrites=true&w=majority")
db = client['test']

object_id = ObjectId()


@app.route('/api/filters', methods=['POST'])
def getData():
    data = request.get_json()
    document = []
    for doc in db['test'].find(data):
        document.append(doc)
    json_data = json.dumps(document, default=json_util.default)
    return json_data


@app.route('/')
def root():
    document = []
    for doc in db['test'].find():
        document.append(doc)
    return json.dumps(document, default=json_util.default)


@app.route('/api/filter/<string:name>')
def getFilterData(name):
    json_data = json.dumps(db['test'].find().distinct(name), default=json_util.default)
    return json_data


if __name__ == '__main__':
    app.run()
