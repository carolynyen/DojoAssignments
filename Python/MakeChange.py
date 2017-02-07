def change(cents):
    coins = {}
    dollars = 0
    quarters = 0
    dimes = 0
    nickels = 0
    while cents >= 100:
        dollars += 1
        cents -= 100
    while cents >= 25:
        quarters += 1
        cents -= 25
    while cents >= 10:
        dimes += 1
        cents -= 10
    while cents >= 5:
        nickels += 1
        cents -= 5
    coins["dollars"] = dollars
    coins["quarters"] = quarters
    coins["dimes"] = dimes
    coins["nickels"] = nickels
    coins["pennies"] = cents
    return coins

print change(387)
