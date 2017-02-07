def insertion_sort(arr):
    x = 0
    for index in range(1, len(arr)):
        if arr[index] <= arr[x]:
            i = 0
            y = 0
            while arr[i] < arr[index]:
                i += 1
            y = i
            arr.insert(y,"blank")
            arr[y] = arr[index+1]
            arr.pop(index+1)
            x += 1
    return arr

print insertion_sort([7, 1, 2, 1, 6, 8, 54, 2])
