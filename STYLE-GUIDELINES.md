# Code Conventions

We emphasize readability, collaboration and quality code. If you are familiar with [betty]() style, you're good to go! If not, below are the most important things to take note of:

#### Indentation and Formatting
1. **Indentation**: Use 4 spaces for indentation, not tabs.
2. **Line length**: Limit lines to 80 characters.
3. **Braces**: Place opening braces on the same line as the statement.
Closing brace sgould be on a new line aligned with the start of the statement.
4. **Spacing**:
    * Use a space around operators ('=', '+', '-', etc)
    * Use spaces before closing the HTML tags ('/>')
    * Do not add spaces between function names and parentheses

#### Naming Conventions
1. **Variable Names**: Use snake_case for variable names
2. **Function Names**: Use snake_case for function names
3. **Constants**: Use all upercase with underscores for constants


#### Comments
1. **Block Comments**: Use block comments to describe the purpose of a file, function, or complex code of a block
2. **Inline Comments**: Use inline comments sparingly to explain non-pbvous code.


#### Functions
1. **Function Length**: Keep functions short and focused on a single task. Ideally, functions should fit within 20-25 lines.
2. **Parameter Count**: Maximum number of oarameters should be 4. Use structures for related parameters if necessary.
3. **Return Types**: Always specify a return type for functions even 'viod' for those that do not return a value.

#### Variables
1. **Declarations**: Declare variables at the beginning, not midle of a block (function or loop).
2. **Initialization**: Initialize the variables during declaration if possible
.
