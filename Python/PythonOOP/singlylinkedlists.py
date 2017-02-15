class Node(object):
 def __init__(self, value):
  self.value = value
  self.next = None

class SinglyLinkedList(object):
 def __init__(self):
  self.head = None
  self.tail = None
  self.last = self
 def PrintAllVals(self):
     runner = self.head
     while(runner != None):
       print(runner.value)
       runner = runner.next
     return self
 def AddBack(self, val):
     new_node= Node(val)
     runner = self.head
     while(runner.next != None):
        runner = runner.next
     runner.next = new_node
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
      while(runner.value != nextVal):
         runner = runner.next
      runner.next = new_node
      runner.next.next
      return self
 def InsertAfter(self, preval, val):
     return self
 def RemoveNode(self, val):
     return self
 def ReverseList(self):
     return self

list = SinglyLinkedList()
list.head = Node('Alice')
list.head.next = Node('Chad')
list.head.next.next = Node('Debra')

# list.AddBack('Back').PrintAllVals()
# list.AddFront('Front').PrintAllVals()
list.InsertBefore('Chad','InBefore').PrintAllVals()
