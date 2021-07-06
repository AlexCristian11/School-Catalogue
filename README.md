# School Catalogue

This project represents classes in JavaScript and how to use them to create a school catalogue for primary and high schools. Because these classes share properties and methods, each will inherit from a parent "School" class. The parent and child classes have the following properties , getters , setters , and methods:

## School

- **Properties** : name (string), level (one of two strings: 'primary', 'high'), and numberOfStudents (number) 
- **Getters** : all properties have getters
- **Setters** : the numberOfStudents property has a setter
- **Methods** : .quickFacts() and .pickSustituteTeacher() (this is a static method)

## Primary

- Includes everything in the "School" class, plus one additional property
- **Properties** : pickupPolicy (string)

## High

- Includes everything in the "School" class, plus one additional property
- **Properties** : sportsTeam (array of strings)
 