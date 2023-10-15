Magic Stick

You have n magic sticks in a magic stick, you can either increase or decrease the length of the stick but every time you increase or decrease one unit of the stick, it will cost you.

You want to convert all the sticks to equal length. Calculate the minimum cost of making all the sticks of equal length.

Input Specification:

input1: n, number of magic sticks

input2: An array containing length of each magic stick

input3: An array containing the cost of increasing or decreasing

one unit length of ith stick

Output Specification:

Return the minimum cost of making all sticks of an equal length

Example 1:

input1:2 input2: (1,2)

input3: (10,20)
Output: 10

Explanation:

To make equal length of size 1, the total cost is 20. To make equal length of size 2, the cost is 10.

So, the minimum cost is 10.

Example 2:

input1:3

input2: (1,2,3)

input3: (20,30,40)

Output: 60
Explanation:

To make equal length of size 1the total cost is 1-1)*20+(2-1)*30+(3

40=110

To make equal length of size 2, the total cost is 2-1)*20+(2-2

2)*40-60

To make equal length of size 3, the total cost is 3-1)*20+(3-2)*30+(33)*40-70

So, the minimum cost is 60.