# Flow

## About Flow
Flow is a simple kanban board application to organize your to-dos and track your progress. With flow, you can add, delete, and update your to-dos and categorize them between *to-do, ongoing,* and *done* by moving them across each provided columns. 

## Background
Flow v0.1 is a collaborative  project in partial fulfillment for the requirements of S-CSPC223 Programming Languages Course. 

Being a collaborative project consisting of students with varying expertise, as well as time constraints provided for this summative project,  the development team decided to adapt @jakeolase 's previous project, [shortNotes](https://github.com/jakeolase/shortNotes).

This was used as the base code of the application for a quick headstart. shortNotes was then remodeled and/or infused with new features to develop Flow. 

v0.1 was able to meet the requirements of the said course. However, several issues are still existent due to the fact that its code base is a note taking application. Most prominent issue was the saving of text notes columns in the local storage. 


## Flow v.0.2
Flow is then continued solely by @jakeolase in attempt to develop a fully-working application, Flow v0.2.  

The entire logic of adding, deleting, moving, and saving of text notes are overhauled. 

> Flow v0.2 is currently a **work-in-progress**.

## Limitations
- Mobile webview is currently not supported
- Web application is designed with full screen desktop in mind, due to the previous requirements of the said course
- Some v0.1 features are deprecated to give way for more necessary functionality.

## How to Run Flow
Some functionalities of the JavaScript code may not run by simply opening **index.html**. If none of the Kanban Columns appear, please run on a local host or through **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** Extension on VSCode. 

## How to Use Flow
Three columns are provided for the users to utilize— **Todo, Ongoing,** and **Done**. 

#### Adding a Task
Each column headers also serves as an add task button. Adding a task creates a new text note to input the details of your tasks.

#### Moving a Task to Another Column
Simply drag the text note above, below, or in between texts note if there exists. A drop zone should appear to indicate that the note is ready to be dropped in the selected location. 

#### Deleting a Task
Right click on the text note and select *Delete* to delete a task. 

#### Saving a Task
Tasks created are automatically saved in your local storage **after** leaving the text area. 

Tasks are stored indefinitely unless browser's cache are cleared and/or specific notes are deleted. 


## A Collaborative Project
As mentioned, Flow is a summative project in partial fulfillment for the requirements of S-CSPC223 Programming Languages at De La Salle University - Dasmariñas. 

`*  Deprecated, used only for the requirements of the course`

#### @jakeolase
- Project Lead of Flow
- UI/UX Design
- Add, Delete, and Save Task Note Function
- User Welcome Banner`*`
- **Redevelopment of Flow v0.2**

#### @godwincaraan
- Login Page Front-End and UI/UX`*`
- Night Mode Function

#### @jongrantusa
- Task Note Drag and Drop Functionality
- How to Use Section`*`

#### @RamiloVOrejanaJr
- Task Note Drag and Drop Functionality

#### @StickyFingers001
- Right Click Menu
- Bold, Italicize, and Highlight Function\
`Deprecated due to new Kanban Board logic in v0.2. Might be added on future release.`

#### @anthony2517
- Right Click Menu


## License
Licensed under the MIT license.
