
def parenvalid(str):
    countleft = 0
    countright = 0
    for i in range(len(str)-1, 0, -1):
        if str[i] == ')':
            countright += 1
        if str[i] == '(':
            countleft += 1
        if countleft > countright:
            return False
    if countleft != countright:
        return False
    else:
        return True

string= ')(p()(())('
print parenvalid(string)
