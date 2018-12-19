##  A quick journey through API Testing. 
From Node Application to Postman best practices through Gherkin features


This repository is the one for the book "A quick journey through API Testing. From Node Application to Postman best practices through Gherkin features" written by Bruno Flaven.

### Introduction

I have discovered through my job, the requirement to make tests both from a technical and a content point of view. For anyone who is running an API centric ecosystem of website, applications, third-parties, partners, testing is a prerequisite. It has been a long and tedious process of a progressive discovery of tools, mindset, technology that enable API testing. At the end of this process, I have decided to compile all my investigations into a book named "A quick journey through API Testing. From Node Application to Postman best practices through Gherkin features"


This repository must be seen next to the book as I give much more explanations to each part of the scripts.

Here 2 elements extracted from the book: The Foreword and the Table Of Contents to spur your curiosity. Remember, this book has been written for non-developers as API testing is at the crossroad of marketing, editorial and technical issue and is the main guarantee for quality.

#### Foreword

It makes few months that I am working with Postman, first to learn how Postman works and how can I use it as a tool for testing especially an API that feeds mobile applications. I read a lot of resources regarding this subject and here is a synthesis of what I learned.

As a reminder, my objective was to convince a non-developer to resort to tests at an early stage in the development of an API-centric digital product e.g. Desktop, Mobile Application… etc. 

In the meantime, I had to figure out what API can I use to illustrate the process of creating’s tests. For this part, that’s my son who has given me the idea of the API that will be used to illustrate this book. Just to make it short, we are sometimes playing with a cards game with country’s flags. So, I have decided to create an API that contains all countries with all information that can be useful including flags.

The idea was to create a real MVP of an API plus the tests that insure the quality of the content exposed and explore the ability of Postman/Newman to test it. My approach is that for each end-point, I had to think at the same time to the test that validates this new feature and its content.

I found an open source project named restcountries.eu and leveraged on this application to insert flag in it. At the very beginning, I have called it fl@g@pi and finally renamed to flagapi with no "at sign" @, as the @ is too hard to cut and paste. My purpose is to be able to test the main end-points of this new application.

So basically, my TodoList is or was the plan of this book.

All the content of this book is available on github in my account https://github.com/bflaven/a-quick-journey-through-api-testing


#### Table Of Contents

- Install 
- CLI
- Highlights 
- Usage
- API
  * toc.plugin
  * toc.json
  * toc.insert
  * Utility functions
- Options
  * options.append
  * options.filter
  * options.slugify
  * options.bullets
  * options.maxdepth
  * options.firsth1
  * options.stripHeadingTags
- About



Introduction
        Foreword

Install the environment
        Let's be prepared       
        Install Homebrew        
        Install Node & NPM      
        Install Postman 
        Install Newman  
        Few lines about Newman usage    
        Few other tools

Create an API with node 
        Launch in the basic app 
        Some changes in the basic app   

Write Gherkin Features  
        Quick intro to features 

Basic Tests JavaScript  
        Custom Code vs PM API   
        Make the script works or fails  
        Fuzzy Refinements       

Intermediate Tests      
        Tests Great Evolution Gallery   
        Progressing in test writing     
        Shrinking the code with functions       

Advanced Tests NPM      
        Using MPM to launch tests       

CI Jenkins-Newman       
        Newman take-away : using the —folder parameter  
        Make the couple Jenkins-Newman works    

Conclusion      
        End of the journey      

Resources      
        Some Resources 

Lexicon 
        Some Definitions        

