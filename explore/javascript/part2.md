1. Line 12 will print out the value of the counter i since it was declared as a var. Because it was delcared as a var, the scope is within the function.
2. Line 13 will print 150. discountedPrice is a variable declared as a var so its scope is within the function.
3. Line 14 will print 150. finalPrice is a variable declared as a var so its scope is within the function.
4. This function will return an array with the discounted prices. The code loops through the prices array and calculates a discounted price. The code has no errors in terms of variables since all of them were declared as a var which means the scope is within the function.
5. Line 12 will return an error. The variable i was declared as a let which the scope in only within the for loop block.
6. Line 13 will also return an error since discountedPrice is a let variable so its block scope is only within the for loop.
7. Line 14 will print out the value of finalPrice since the scope of the variable is the entire function where as the previous 2 questions the variable scopes were of the for loop.
8. The function will return the array of discounted prices as the variables scope is of the entire function.
9. The code causes an error since the scope of variable i is only that of the for loop.
10. Line 12 will print out "3" as the scope of const length is that of the function
11. The function will return the array of discounted prices. This works because you can still push items into a const array.
```
12 A. student.name
12 B. student['Grad Year']
12 C. student.greeting()
12 D. student['Grad Year'].name
12 E. student.courseLoad[0]
```
```
13 A. "32" since the integer 2 is identical with it string representation
13 B. 1 since the subtraction operator is not overloaded so the "3" becomes a 3
13 C. 3 since null's integer representation is 0
13 D. "3null" since null is treated as a string
13 E. 4 since true is represented by 1 as an integer
13 F. 0 since false and null are represented by 0 as an integer
13 G. 3undefined since undefined becomes a string representation
13 H. NaN since the subtraction operator is not overloaded the undefined becomes a NaN
```
```
14 A. true since '2' turns into an integer
14 B. false since '2' is greater than '1' alphabetically and '2' is the shorter string
14 C. true since '2' becomes and integer
14 D. false since the strict equality operator doesn't convert types
14 E. false since true becomes 1 as an integer representation
14 F. true since Boolean() of any value that is not related to false is true and since both sides are the same type the strict equality runs into no issues
```
15. The == operator will type convert both sides of the operator to see if they are equal to each other. The === operator will see if both sides are equal without type conversion. So 2 == '2' will return true since the operator will type convert the string to an integer. However, the === operator won't type convert the string; therefore the items are not equal to each other.