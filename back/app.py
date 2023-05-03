from routes.routes import  *

if __name__ == '__main__':    
    #.run(debug=True)
    app.run(port=3008, host='localhost', debug=True, threaded=True) # Executa a aplicação na porta 8085, vc poderá mudar tb para outro valor dentro o espectro permitido.


