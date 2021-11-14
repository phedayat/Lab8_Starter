# Lab 8 - Starter

### Intro - Question 1
    * Answer: 1, because if there is any commit that causes an error, that breaks the build, we want to catch it as early as possible to prevent a cascade of errors stemming because of the first one. Each piece of code pushed to the repo, each change, should be errorless; hence, we need to use a per push GitHub action to test the code.