# Lab 8 - Starter

### Questions
#### Question 1
    * Answer: 1, because if there is any commit that causes an error, that breaks the build, we want to catch it as early as possible to prevent a cascade of errors stemming because of the first one. Each piece of code pushed to the repo, each change, should be errorless; hence, we need to use a per push GitHub action to test the code.

#### Question 2
    * Answer: No

#### Question 3
    * Answer: Yes, because the messaging functionalities aren't necessarily reliant on or involved with the webpage itself; we can individually test all the core features of the messaging platform without interacting with the webpage.

#### Question 4
    * Answer: No, as we would test it by attempting to type in *more* than the max message length, which involves manipulating the DOM (typing text into the message box). This feature isn't related to the core messaging platform, but rather it's a feature of the textbox on the webpage that receives user input.