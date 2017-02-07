def bubble_sort(arr):
    for index in range(0, len(arr)):
        for count in range(1, len(arr)):
            if arr[count - 1] > arr[count]:
                arr[count], arr[count - 1] = arr[count - 1], arr[count]
    return arr

print bubble_sort([8,3,1,6,7,2,4,5])
