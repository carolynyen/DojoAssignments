import random

def randomnumber():
    return int(random.random()*41)+60

def scores():
    print "Scores and Grades"
    for count in range(0,11):
        grade = "A"
        score = randomnumber()
        if score <= 69:
            grade = "D"
        elif score >= 70 and score <=79:
            grade = "C"
        elif score >= 80 and score <=89:
            grade = "B"
        elif score >= 90 and score <= 100:
            grade = "A"
        print "Score: " + str(score) + "; Your grade is " + grade
    print "End of the program. Bye!"

scores()
