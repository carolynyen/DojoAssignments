def insertion_sort(arr):
    x = 0
    for index in range(1, 6):
        if arr[index] <= arr[x]:
            for count in range(0,x+1):
                y = 0
                if arr[count] < arr[x] and arr[count] > arr[0]:
                    y = count
            arr.insert(y,"hi")
            arr[y] = arr[index+1]
            arr.pop(index+1)
            x += 1
            print arr
    return arr

insertion_sort([8,3,1,1,7,2,4,5])
