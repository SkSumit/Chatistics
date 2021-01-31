from chatistics.api.analysis.days import basedonday


def analysis(data):
    analysis = {
                "basedOnDays" : basedonday(data) 
                # "basedOnTime" : basedonday(data)          
    } 
    return analysis