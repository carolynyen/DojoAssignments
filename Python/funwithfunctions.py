def odd_even():
    for count in range(1,2001):
        if count%2 == 0:
            print "Number is", count, "This is an even number."
        else:
            print "Number is", count, "This is an odd number."

a = [2, 4, 10, 16]
def multiply(list, num):
    for count in range(0,len(list)):
        list[count] = list[count] * num
    return list
print multiply(a,5)

print multiply([2,4,5],3)

def layered_multiples(arr):
  new_array = []
  for i in range(0,len(arr)):
      minilists = []
      for count in range(0,arr[i]):
          minilists.append(1)
      new_array.append(minilists)
  return new_array

x = layered_multiples(multiply([2,4,5],3))
print x
