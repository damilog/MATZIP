import pymysql

class DBHelper:
    __db, __cursor = None, None

    def __init__(self, options) -> None:
        self.__db = pymysql.connect(**options)
        self.__cursor = self.__db.cursor(pymysql.cursors.DictCursor)

    def getItem(self, id: int):
        query = """
            SELECT category, naver_rating, naver_comments, price
            FROM matzip
            WHERE id = %s
        """
        self.__execute(query, id)
        return self.__fetchone()

    def getResponses(self, items: list):
        responses = list()
        query = "SELECT * FROM matzip WHERE id = %s;"
        for item in items:
            self.__execute(query, item)
            responses.append(self.__fetchone())

        return responses

    def close(self):
        self.__db.close()

    def __execute(self, sql, data=[]):
        return self.__cursor.execute(sql, data)

    def __fetchone(self):
        return self.__cursor.fetchone()
