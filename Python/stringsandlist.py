str = "If monkeys like bananas, then I must be a monkey!"
print str.find("monkeys")

x = str.replace("monkey", "alligator")
print x

x = [2,54,-2,7,12,98]
print max(x)
print min(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[len(x)-1]
a = [x[0], x[len(x)-1]]
print a

b = [19,2,54,-2,7,12,98,32,10,-3,6]
b.sort()
print b

c = []
for count in range(0, len(b)):
    if b[count] < 0:
        c.append(b[count])
print c

b.insert(0, c)
print b
