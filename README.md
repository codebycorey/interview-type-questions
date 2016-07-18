[Back to home](../README.md)
# Challenging Questions
A collection of questions and challenges that could possibly be in an interview

## Questions

#### Question 1
```
var templateObj = {
  sentence: 'The {{ thing }} {{ action }}.',
  thing: '{{ color }} {{ animal }}',
  action: '{{ flies around the {{ place }} }}',
  color: 'red',
  animal: 'bird',
  place: 'house'
};

function beard (template, key) {
  // Write this
}

should(beard(templateObj, 'sentence')).equal('The red bird flies around the house.');
```

#### Question 2
```
String = 'abcaba'
Req: Without changing the order of the letters, how do you produce an array of the 2 letter combinations that occur the most often?

Example Result for above Input = ['ab']
all letter combinations for clarity: ['ab', 'bc', 'ca', 'ab']
```
To make it more challenging adjust the function to accept different sizes of letter combinations.

#### Question 3
```
Without using the internet, write an array sort that is better than n^n
Fastest is n*Log(n)
```
