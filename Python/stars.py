#worked with Ali

x = [4, 6, 1, 3, 5, 7, 25]
def draw_stars1(list):
    for index in range(0,len(list)):
        stars = ""
        for count in range(0,list[index]):
            stars += "*"
        print stars

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def draw_stars2(list):
    for index in range(0,len(list)):
        stars = ""
        if type(list[index]) is str:
            for count in range(0,len(list[index])):
                stars += list[index][0].lower()
        else:
            for count in range(0,list[index]):
                stars += "*"
        print stars

draw_stars2(x)
