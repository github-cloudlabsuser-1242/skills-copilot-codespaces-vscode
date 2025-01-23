def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    return x / y

def percentage(x, y):
    return (x / y) * 100

def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user can choose from the following operations:
    1. Add
    2. Subtract
    3. Multiply
    4. Divide
    5. Percentage

    The function prompts the user to enter their choice of operation and two numeric values.
    It then performs the selected operation and prints the result.

    If the user enters invalid input (non-numeric values), an error message is displayed.

    Note:
    - Division by zero is not handled in this function.
    - The function assumes that the arithmetic operation functions (add, subtract, multiply, divide, percentage) are defined elsewhere in the code.

    Raises:
    - Exception: If an unexpected error occurs during the execution of the function.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    try:
        choice = input("Enter choice(1/2/3/4/5): ")

        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input! Please enter numeric values.")
            return
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"{num1} + {num2} = {add(num1, num2)}")
        elif choice == '2':
            print(f"{num1} - {num2} = {subtract(num1, num2)}")
        elif choice == '3':
    except Exception as e:
        print(f"An error occurred: {e}")
        return
        elif choice == '4':
            print(f"{num1} / {num2} = {divide(num1, num2)}")
        elif choice == '5':
            print(f"{num1} is {percentage(num1, num2)}% of {num2}")
    else:
        print("Invalid input")

if __name__ == "__main__":
    calculator()