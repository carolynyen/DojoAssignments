import random
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
  def attack(self):
    self.taunt()
    luck = round(random.random() * 100)
    if(luck > 50):
      if((luck * self.stealth) > 150):
        print 'attacking!'
        return True
      else:
        print 'attack failed'
        return False
    else:
      self.health -= self.strength
      print "attack failed"
      return False

class Point(object):
    def __init__(self,x = 0,y = 0):
        print "Created a new point!"
        self.x = x
        self.y = y
    def distance(self):
        #Find distance from origin
        return (self.x**2 + self.y**2) ** 0.5
