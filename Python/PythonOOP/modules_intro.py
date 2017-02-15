# import the library
import urllib2
# dir(urllib)
# help(urllib)
import my_modules.test_module
from my_modules import test_module

# NOTE: there's a urllib version for each version of Python:
# Use urllib2 if you're using Python 2
# Use urllib3 for Python 3

# Finally, use it...
# urllib.urlopen(...)

import arithmetic
# print arithmetic.add(5, 8)
# print arithmetic.subtract(10, 5)
# print arithmetic.multiply(12, 6)

import random # import the random module
class Human(object):
  def __init__(self, clan=None):
    print 'New Human!!!'
    self.health = 100
    self.clan = clan
    self.strength = 3
    self.intelligence = 3
    self.stealth = 3
  def taunt(self):
    print "You want a piece of me?"
  # inserted a new function so our Human instances can attack
  def attack(self):
    self.taunt()
    # use the random module to generate a number when we attack
    luck = round(random.random() * 100)
    if(luck > 50):
      if(luck * self.stealth > 150):
        print 'attacking!'
        return True
      else:
        print 'attack failed'
        return False
    else:
      self.health -= self.strength
      print "attack failed"
      return False

# class Wizard(Human):
#   def heal(self):
#     self.health += 10
# class Ninja(Human):
#   def steal(self):
#     self.stealth += 5
# class Samurai(Human):
#   def sacrifice(self):
#     self.health -= 5
# create new instance of Wizard, Ninja, and Samurai
# all instances still have human properties because its
# class inherits from the Human class
# print harry.health
# print rain.health
# print tom.health
# yet they are subclasses which mean they can extend the current functionality of Human class
# instances of the Wizard class can perform the heal method
# harry.heal()
# print harry.health
# instances of the Ninja class can perform the steal method
# rain.steal()
# print rain.stealth
# instances of the Samurai class can perform the sacrifice method
# tom.sacrifice()
# print tom.health
# print tom.stealth

class Wizard(Human):
    def __init__(self):
        super(Wizard, self).__init__()   # use super to call the Human __init__ method
        self.intelligence = 10           # every wizard starts off with 10 intelligence
    def heal(self):
        self.health += 10
class Ninja(Human):
    def __init__(self):
        super(Ninja, self).__init__()    # use super to call the Human __init__ method
        self.stealth = 10                # every Ninja starts off with 10 stealth
    def steal(self):
        self.stealth += 5
class Samurai(Human):
    def __init__(self):
        super(Samurai, self).__init__()  # use super to call the Human __init__ method
        self.strength = 10               # every Samurai starts off with 10 strength
    def sacrifice(self):
        self.health -= 5

class Node(object):
 def __init__(self, value):
  self.value = value
  self.next = None

class SinglyLinkedList(object):
 def __init__(self):
  self.head = None
  self.tail = None

list = SinglyLinkedList()
list.head = Node('Alice')
list.head.next = Node('Chad')
list.head.next.next = Node('Debra')

print list.head.value
