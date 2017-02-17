import math
def change(cents):
    coins = {'dollars':'0', 'quarters': '0', 'dimes': '0', 'nickels': '0', 'pennies': '0'}
    if cents >= 100:
        coins['dollars'] = int(math.floor(cents/100))
        cents = cents % 100
    if cents >= 25:
        coins['quarters'] = int(math.floor(cents/25))
        cents = cents % 25
    if cents >= 10:
        coins['dimes'] = int(math.floor(cents/10))
        cents = cents % 10
    if cents >= 5:
        coins['nickels'] = int(math.floor(cents/5))
        cents = cents % 5
    coins['pennies'] = cents
    return coins

print change(459)
