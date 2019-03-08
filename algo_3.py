# movie theater problem
# nCols = 16
# nRows = 11
# col = 5
# row = 3

# affected_column = nCols - (col -1)
# affected_rows = nRows - row

# affected_peeps = affected_column * affected_rows
# print(affected_peeps)


# elevator problem
# left_elevator = "left"
# right_elevator = 'right'

# def elevator(left, right, call):
#     if abs((call-left)) < abs((call-right)):
#         print(left_elevator)
#     elif abs((call-left)) > abs((call-right)):
#         print(right_elevator)
#     elif abs((call-left)) == abs((call-right)):
#         print(right_elevator)

# elevator(0, 1, 0)
# elevator(0, 1, 1)
# elevator(0, 1, 2)
# elevator(0, 0, 0)
# elevator(0, 2, 1)

# def checklists(list_a, list_b):
#     result = []
#     counter = 0
#     if len(list_a) == len(list_b):
#         for num in list_a:
#             while counter < len(list_b):
#                 if num == list_b[counter]:
#                     result.append(list_b.pop(counter))
#                     counter += 1
#                     break
#                 else:
#                     counter += 1
#             counter = 0
#     else:
#         print('false')
#     print(result)
    
#     if len(result) == len(list_a):
#         print('true')
#     else:
#         print('false')

# checklists([1,2,3,4], [1,2,3,4])
# checklists([1,2,3,4], [1,4,5,6])
# checklists([1,2,3,4], [1,4,4,2])
# checklists([1,2,3,4], [1,4,3,2])
# checklists([1,2,3,4,5], [1,2,3,4])
# checklists([1,1,1,1], [1,1,1,2])
# checklists([1,1,2,2], [2,2,2,1])



# better way

def are_they_the_same(a, b):
    counter = {}
    counter2 = {}
    for i in a:
        counter[i] = 0
    for i in a:
        counter[i] += 1
    for i in b:
        counter2[i] = 0
    for i in b:
        counter2[i] += 1
    
    resultFalse = 0
    for key in counter.keys():
        if key in counter2.keys():
            if counter[key] == counter2[key]:
                pass
            else:
                resultFalse = 1
    if resultFalse == 1:
        return False
    else:
        return True

print(are_they_the_same([1,2,3,4], [1,2,3,4]))