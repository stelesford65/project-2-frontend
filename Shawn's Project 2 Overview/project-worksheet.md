# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Completev
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Google Sheet

Include link to your google sheet here.  Here is the sample [Suresh had used in class](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0) 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://res.cloudinary.com/dju2f4kdt/image/upload/v1596778137/1596778053994_regional_screenshot_zbar1a.png)
- [Tablet](https://res.cloudinary.com/dju2f4kdt/image/upload/v1596778137/1596778053994_regional_screenshot_zbar1a.png)
- [Desktop](https://res.cloudinary.com/dju2f4kdt/image/upload/v1596778137/1596778053994_regional_screenshot_zbar1a.png)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

Include a full list of features that have been [prioritized](https://res.cloudinary.com/doaftkgbv/image/upload/v1583773146/ValueVSComplexity_u2inhx.png) based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 1hr | 1.5hr | 1hr|
| Project Previews | H | 3hr | -hr | 2hr|
| Regular Nav | H | H | -hr | 1hr|
| Adding Form | H | 1.5hr| -hr | 2hr |
| Other sections and flex| M | 4hr | 2hr | 1hr|
| Working with API | H | 3hrs| 2hr | 20hr |
| Responsive | H | 3hr | -hr | 1hr|
| Social Media Icons | L | 1hr | -hr | 1hr|
| Total | H | 15.5hrs| -hrs | 29hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Hover | L | 3hr | -hr | 0hr|
| Banner letters wiggle | L | 1hr | -hr | 0hr|
| Interactive Banner | M | 4hr | -hr | 0hr|
| Materialize | H | 4hr | -hr | 0hr|
| Bootstrap | H | 4hr | -hr | 0hr|
| Make own icon | L | 4hr | -hr | 0hr|
| Total | H | 20hrs| -hrs | 0hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

const getPilots = async()=>{ //Reading on async

    const result = await fetch(URL + "pilot").then(res => res.json())//Takes response from fecth and turns it into a usable JS object
    console.log(result)
    $("#photos").empty()
result.forEach(element => {
   
    //Div, append text to that specific image within the div
    const newDiv = $("<div>").addClass("post");
    newDiv.append($('<img>').attr("src",element.post)); 
    newDiv.append($('<p>').text(element.caption));
    
    const updateDiv = $('<div>').addClass("update").css("display","none")
    updateDiv.append($('<input>').attr("id",`image-url-${element._id}`).val(element.post))
    updateDiv.append($('<input>').attr("id",`desc-${element._id}`).val(element.caption))
    updateDiv.append($('<button>').text("Update Post").attr("id",element._id).click(updatePost))
    newDiv.append(updateDiv)

    newDiv.append($('<input>').attr("id",`comment-${element._id}`))//Leave blank so that we can pull text from there and add it to the endpoint where we'll make make the post request
    newDiv.append($('<button>').text("Change").click(()=>updateDiv.toggle()))
    newDiv.append($('<button>').text("Delete").attr("id",element._id).click(deletePost))
    newDiv.append($('<h3>').text(""));
    newDiv.append($('<button>').text("Send").attr("id",element._id).click(addComment))
   
    const commentDiv = $("<div>")
    console.log(element.comments)
    element.comments.forEach(comment=> {
        console.log(comment)
        commentDiv.append($("<p>").text(comment.text))
    })
    newDiv.append(commentDiv)
    $("#photos").append(newDiv) 
})

/*This code got my front end to work with my backend and took me the longest to work on */

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 Connecting the front end to the backend. THe above code was a huge part of the solution

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  require                              
**RESOLUTION**: Comment out the automatically generated require line: //const { delete } = require("vue/types/umd");
## Previous Project Worksheet
 - [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
 - [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
