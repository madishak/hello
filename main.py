class Test:
    def __init__(self, nums):
        self.nums = nums
        self.storage = []

    def increase(self):
        self.storage.append(self.nums)
        flag = True
        while (flag):
            flag = False
            for i in range(len(self.nums)):
                if self.nums[i] > self.nums[i+1]:
                    temp = self.nums[i]
                    self.nums[i] = self.nums[i+1]
                    self.nums[i+1] = temp
                    flag = True
                    return self.nums


    def printStorage(self):
        return self.storage





t = Test([9,3,6,7,1,7])

print(t.increase())
print(t.printStorage())
print("======================")

print(t.increase())
print(t.printStorage())
print("======================")

print(t.increase())
print(t.printStorage())
print("======================")

print(t.increase())
print(t.printStorage())
print("======================")

print(t.increase())
print(t.printStorage())
print("======================")

print(t.increase())
print(t.printStorage())
print("======================")

print(t.increase())
print(t.printStorage())
print("======================")

print(t.increase())
print(t.printStorage())
print("======================")

