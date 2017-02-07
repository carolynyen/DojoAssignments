def selection_sort(arr):
    x = 0
    for count in range(0, len(arr)):
        for index in range(x, len(arr)):
            if arr[index] == min(arr[x:(len(arr))]):
                arr[x], arr[index] = arr[index], arr[x]
                x += 1
    return arr

print selection_sort([8,3,1,1,7,2,4,5])
