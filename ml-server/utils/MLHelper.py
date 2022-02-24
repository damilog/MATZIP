import pickle
import joblib
import pandas as pd
from kmodes.kmodes import KModes

class MLHelper:
    __file_mode = 'rb'
    __model, __clusters = None, []

    def __init__(self, clusterBin, modelBin) -> None:
        with open(clusterBin, self.__file_mode) as f:
            self.__clusters = pickle.load(f)
    
        with open(modelBin, self.__file_mode) as f:
            self.__model = joblib.load(f)

    def toDataFrame(self, queryResult: dict):
        return pd.DataFrame([list(queryResult.values())])

    def label(self, frame, headerNames: list):
        self.__categorical_rank(frame, headerNames[0])
        self.__categorical_review(frame, headerNames[1])
        self.__categorical_avgprice(frame, headerNames[2])
        
        frame.drop(columns = headerNames, inplace=True)

    def recommends(self, frame):
        result = self.__predict(frame)
        return self.__clusters[result[0]]

    def __predict(self, frame):
        return self.__model.predict(frame)

    def __new_column_name(self, headerName):
        return f"{headerName}_label"

    def __categorical_rank(self, df, column):
        new_column_name = self.__new_column_name(column)
        df[new_column_name] = 0
        df.loc[df[column] <= 4.31, new_column_name] = '보통'
        df.loc[(4.31<df[column])&(df[column] <= 4.407), new_column_name] = '만족'
        df.loc[(4.407<df[column])&(df[column] <= 5.0), new_column_name] = '아주만족'

    def __categorical_review(self, df, column):
        new_column_name = self.__new_column_name(column)
        df[new_column_name] = 0
        df.loc[df[column] <= 200, new_column_name] = '적음'
        df.loc[(200<df[column])&(df[column] <= 421), new_column_name] = '보통'
        df.loc[(421<df[column])&(df[column] <= 743), new_column_name] = '많음'
        df.loc[(743<df[column])&(df[column] <= 14369), new_column_name] = '아주많음'

    def __categorical_avgprice(self, df, column):
        new_column_name = self.__new_column_name(column)
        df[new_column_name] = 0
        df.loc[df[column] <= 10000, new_column_name] = '저렴'
        df.loc[(10000<df[column])&(df[column] <= 13000), new_column_name] = '보통'
        df.loc[(13000<df[column])&(df[column] <= 24000), new_column_name] = '비쌈'
        df.loc[(24000<df[column])&(df[column] <= 149000), new_column_name] = '아주비쌈'
