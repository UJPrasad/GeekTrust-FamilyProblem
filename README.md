# GeekTrust-FamilyProblem
GeekTrust-FamilyProblem
GitHub: https://github.com/UJPrasad/GeekTrust-FamilyProblem

# How to Run

* Install Node.js
* Install NPM
*  > cd into this repository

```
npm start
```

## Brief Description of My Code Structure

Since this is not a huge repo, I haven't resturcted this into folders.
Currently We have:

* Node.js Which is A Node Class which is generic to Family Tree Only
* A High level generic Tree Class which has two most popular traversal methods BFS and DFS
* A Bootraping file called `kingShan.js` to load data of GeekTrust King Shan Family
* A Relationship helper file which handles, which works on kingShan familyTree and handles all relationships
* A familyTree file which combines above files to work and handle most features.
* A common index.js file to handle io operations and listen for user commands

# Tested Commands

```javascript
ADD_CHILD Chitra Aria Female
CHILD_ADDITION_SUCCEEDED
GET_RELATIONSHIP Lavnya Maternal-Aunt
Aria
GET_RELATIONSHIP Aria Siblings
Jnki Ahit
ADD_CHILD Pjali Srutak Male
PERSON_NOT_FOUND
GET_RELATIONSHIP Pjali Son
PERSON_NOT_FOUND
ADD_CHILD Asva Vani Female
CHILD_ADDITION_FAILED
GET_RELATIONSHIP Vasa Siblings
NONE
GET_RELATIONSHIP Atya Sister-In-Law
Satvy Krpi
ADD_CHILD Satya Yaya Female
CHILD_ADDITION_SUCCEEDED
GET_RELATIONSHIP Satvy Sister-In-Law
Atya Yaya
```

# Screenshots

![image](https://image.prntscr.com/image/SQ_Nmu6IQO64ztEU8Q3oTA.png)
