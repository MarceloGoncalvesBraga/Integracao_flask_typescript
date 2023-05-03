import time
from datetime import date, datetime
    
class Control:
    def getCumprimento():
        current_hour = int(time.strftime('%H', time.localtime()))
        #t = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
        if current_hour > 0 and current_hour < 6:
            return print("Ja é madrugada, Bom dia !, ")
        elif current_hour >= 6 and current_hour < 12:
            return "Bom dia!"
        elif current_hour >= 12 and current_hour < 18:
            return "Boa tarde! "
        elif current_hour >= 18 and current_hour <= 23:
            return "Boa noite!"
    
    def getFunc(texto):

        if 'hora' in texto:
            return time.strftime('%H:%M', time.localtime())
        
        elif 'hoje' in texto:
            return str(time.strftime('%d-%m-%Y', time.localtime()))
        
        elif 'dia' in texto:
            return str(time.strftime('%d', time.localtime()))
        
        elif 'mes' in texto:
            months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
            return months[int(time.strftime('%m', time.localtime()))]
        
        elif 'ano' in texto:
            return str(time.strftime('%Y', time.localtime()))
        
        elif 'semana' in texto:
            num = date.today().weekday()
            sem = ("Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo")
            if num < 5:
                return f"{sem[num]}-feira"
            else:
                return f"{sem[num]}"
        
        elif 'data completa' in texto:
            today = datetime.today()
            days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
            months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

            str_month = months[today.month-1]
            str_weekday = days[today.weekday()]

            return f'{str_weekday}, {today.day} de {str_month} de {today.year}'
        else:
            return ''
        
def value_similarity(s1, s2):
    # because they will be re-used several times.
    len_s1, len_s2 = len(s1), len(s2)
    # The upper bound of the distance for being a matched character.
    match_bound = max(len_s1, len_s2) // 2 - 1
    # Initialize the counts for matches and transpositions.
    matches = 0  # no.of matched characters in s1 and s2
    transpositions = 0  # no. of transpositions between s1 and s2
    flagged_1 = []  # positions in s1 which are matches to some character in s2
    flagged_2 = []  # positions in s2 which are matches to some character in s1
    # Iterate through sequences, check for matches and compute transpositions.
    for i in range(len_s1):  # Iterate through each character.
        upperbound = min(i + match_bound, len_s2 - 1)
        lowerbound = max(0, i - match_bound)
        for j in range(lowerbound, upperbound + 1):
            if s1[i] == s2[j] and j not in flagged_2:
                matches += 1
                flagged_1.append(i)
                flagged_2.append(j)
                break
    flagged_2.sort()
    for i, j in zip(flagged_1, flagged_2):
        if s1[i] != s2[j]:
            transpositions += 1

    if matches == 0:
        return 0
    else:
        value_reg = (
            1
            / 3
            * (
                matches / len_s1
                + matches / len_s2
                + (matches - transpositions // 2) / matches
            )
        )
        return value_reg
