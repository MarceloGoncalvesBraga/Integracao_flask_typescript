from  configs.setup import *
from flask import jsonify, request, Flask ,json
import random
from flask_cors import CORS


from funcoes.funcao import Control, value_similarity
from funcoes.bot_chat import lista
import secrets
cors = CORS(app, resources={r"/saudation/*": {"origins": "*"}})
@app.route("/saudation",methods=["GET"])
def saudation():
    contexto = {
        'saudation':  Control.getCumprimento()
        }
    dados = jsonify(contexto)
    dados.headers.add('Access-Control-Allow-Origin', '*')
    return dados

cors = CORS(app, resources={r"/search/*": {"origins": "*"}})
@app.route("/search",methods=["POST"])
def search():

    if request.method == 'POST':
        data = request.get_json()
        texto = data.get('question')
        tt = 0
        resposta = []
        for dado in lista:
            for question in dado["questions"]:
                if value_similarity(question,texto) > tt:
                    tt = value_similarity(question,texto)
                    resposta = dado["responses"]
        print(resposta)
        resposta = resposta[random.randint(0,len(resposta)-1)]
        contexto = {
                'response': resposta
            }
        return jsonify(contexto)

