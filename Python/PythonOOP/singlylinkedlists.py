class Node(object):
 def __init__(self, value):
  self.value = value
  self.next = None

class SinglyLinkedList(object):
 def __init__(self):
  self.head = None
  self.tail = None
 def PrintAllVals(self):
     runner = self.head
     while(runner != None):
       print(runner.value)
       runner = runner.next
     return self
 def AddBack(self, val):
     if self.head == None:
         self.head = Node(val)
         self.tail = self.head
         return self
     else:
       runner = self.head
       while(runner.next != None):
         runner = runner.next
       runner.next = Node(val)
       self.tail = runner.next
       return self
 def AddFront(self, val):
     new_node= Node(val)
     temp = self.head
     self.head = new_node
     new_node.next = temp
     return self
 def InsertBefore(self, nextVal, val):
      new_node= Node(val)
      runner = self.head
      while(runner.next.value != nextVal):
        runner = runner.next
      temp = runner.next
      runner.next = new_node
      runner.next.next = temp
      return self
 def InsertAfter(self, preval, val):
      new_node= Node(val)
      runner = self.head
      while(runner.value != preval):
        runner = runner.next
      temp = runner.next
      runner.next = new_node
      runner.next.next = temp
      return self
 def RemoveNode(self, val):
     runner = self.head
     while(runner.next.value != val):
       runner = runner.next
     runner.next = runner.next.next
     return self
 def ReverseList(self):
     new_head = self.tail
     while self.head != self.tail:
         runner = self.head
         while runner.next.next != None:
           runner = runner.next
         runner.next.next = runner
         runner.next = None
         self.tail = runner
     self.head = new_head
     return self

list = SinglyLinkedList()
list.AddBack('Alice')
list.AddBack('Chad')
list.AddBack('Debra')
list.AddBack('Me')
# list.PrintAllVals()
# list.AddBack('Back').PrintAllVals()
# list.AddFront('Front').PrintAllVals()
# list.InsertAfter('Chad','After').PrintAllVals()
# list.RemoveNode('Chad').PrintAllVals()
list.ReverseList().PrintAllVals()
