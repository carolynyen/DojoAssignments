class Bike(object):
  def __init__(self, price, max_speed, miles=0):
    self.price = price
    self.max_speed = max_speed
    self.miles = miles
  def displayinfo(self):
    print str(self.price), str(self.max_speed)+' mph', str(self.miles) + " miles"
    return self
  def ride(self):
     print "Riding"
     self.miles += 10
     return self
  def reverse(self):
     if self.miles >= 5:
       print "Reversing"
       self.miles -= 5
       return self
     else:
       print "can't go back anymore"
       return self

bike1=Bike(39, 40)
bike2=Bike(2000, 200)
bike3=Bike(100, 50)

bike1.ride().ride().ride().reverse().displayinfo()
bike2.ride().ride().reverse().reverse().displayinfo()
bike3.reverse().reverse().reverse().displayinfo()
