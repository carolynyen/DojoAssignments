def push_front(arr):
    arr.append(10)
    for count in range(0,len(arr)-1):
        arr[count], arr[len(arr)-1] = arr[len(arr)-1], arr[count]
    return arr

print push_front([2,3,4,5,6,7])
