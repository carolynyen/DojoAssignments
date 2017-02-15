class bike(object):
  def __init__(self, price, max_speed, miles=0):
    self.price = price
    self.max_speed = max_speed
    self.miles = miles
  def displayinfo(self):
    print str(self.price), str(self.max_speed)+'mph', str(self.miles) + "miles"
  def ride(self):
     print "Riding"
     self.miles += 10
  def reverse(self):
     print "Reversing"
     if self.miles >= 5:
       self.miles -= 5
     else:
       print "can't go back anymore"

bike1=bike(39, 40)
bike2=bike(2000, 200)
bike3=bike(100, 50)

bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayinfo()

bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayinfo()

bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayinfo()
