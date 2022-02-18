from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/recommend")
def read_root():
    return {"Hello": "World"}