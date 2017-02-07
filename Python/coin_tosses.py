import random

def randomnumber():
    return int(round(random.random()+1))

def cointoss():
    heads = 0
    tails = 0
    for count in range(1,5001):
        if randomnumber() == 1:
            heads += 1
            print "Attempt #", str(count), "Throwing a coin..It's a head! Got ", str(heads), " head(s) so far."
        else:
            tails += 1
            print "Attempt #", str(count), "Throwing a coin..It's a tail! Got ", str(tails), " tail(s) so far."
    print "Ending the program. thank you!"

cointoss()
