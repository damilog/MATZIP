import os

from fastapi import FastAPI

from utils.MLHelper import MLHelper
from utils.DBHelper import DBHelper

app = FastAPI()

envOptions = dict(user=os.environ['user'], passwd=os.environ['passwd'], host=os.environ['host'], db=os.environ['db'], charset=os.environ['charset'])
statusOk = "ok"

clustersPath = './utils/data.pickle'
modelPath = './utils/kmode_model.pkl'

@app.get("/recommend/{item_id}")
async def read_root(item_id: int):
    dataHeaders = [1, 2, 3]

    dbHelper = DBHelper(envOptions)
    mlHelper = MLHelper(clustersPath, modelPath)

    itemDict = dbHelper.getItem(item_id)

    row = mlHelper.toDataFrame(itemDict)
    mlHelper.label(row, dataHeaders)

    recommendItems = mlHelper.recommends(row)
    responses = dbHelper.getResponses(recommendItems)

    dbHelper.close()

    return dict(status=statusOk, count=len(responses), items=responses)