import re


def corpus(tokenConent):
    CORPUS = []
    for i in range(len(tokenConent)):
        review = re.sub('\n',' ',str(tokenConent[i]))
        review = review.lower()
        review = review.split()
        review = ' '.join(review)
        CORPUS.append(review)
    return CORPUS

