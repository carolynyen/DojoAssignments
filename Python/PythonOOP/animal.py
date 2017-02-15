class Animal(object):
    def __init__(self, name, health=100):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def display_health(self):
        print self.name
        print self.health
        return self
animal= Animal("Sam")
animal.walk().walk().walk().run().run().display_health()

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.name = name
        self.health = 10
    def pet(self):
        self.health += 5
        return self

dog = Dog("Samdog")
dog.walk().walk().walk().run().run().pet().display_health()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.name = name
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def display_health(self):
        print "This is a dragon!"
        return super(Dragon, self).display_health()

dragon = Dragon("dragonsam")
dragon.walk().walk().walk().run().run().fly().fly().display_health()
