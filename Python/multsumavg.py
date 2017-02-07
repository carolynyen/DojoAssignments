for count in range(1,1001):
    if count%2 != 0:
        print count

for count in range(5, 1000001):
    if count%5 == 0:
        print count

a = [1, 2, 5, 10, 255, 3]
sum = 0
for count in range(0,len(a)):
    sum = sum + a[count]
print sum

a = [1, 2, 5, 10, 255, 3]
sum = 0
for count in range(0,len(a)):
    sum += a[count]
print sum/len(a)
