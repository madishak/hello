from pprint import pprint

class Test:
    def __init__(self, nums):
        self.nums = nums
        self.storage = []

    def increase(self):
        flag = True
        while (flag):
            flag = False
            for i in range(len(self.nums)-1):
                if self.nums[i] > self.nums[i+1]:
                    self.nums[i],self.nums[i+1]=self.nums[i+1],self.nums[i]
                    flag = True
                    self.storage.append(self.nums.copy())
                    return self.nums
                    """ 
                    list у нас изменяемый тип данных. Это значит, что он передается "по ссылке",
                    т.е.  self.storage.append(self.nums) добавит в storage ссылку на num. если мы где-то поменяем
                    num то и элементы storage поменяются.
                    Для копирования "по значению" надо использовать self.storage.append(self.nums.copy()) 
                    Он создат в памяти независимую версию значений, которые находятся в num и передаст их в storage
                    """


    def printStorage(self):
        pprint(self.storage) #pprint - просто красиво печатает





t = Test([9,3,6,7,1,7])


t.increase()
print(t.increase())
t.printStorage()

print(t.increase())
t.printStorage()

print(t.increase())
t.printStorage()

print(t.increase())
t.printStorage()

print(t.increase())
t.printStorage()

print(t.increase())
t.printStorage()

print(t.increase())
t.printStorage()