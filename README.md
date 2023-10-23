# 💻 Stocks Management Project
This is a web application through you can manage your stocks in different domains, for example if you have a shop with some products, you can keep track the whole workflow from supplier to clients.
The main purpose of this application is to dive deeper inside the Clean Architecture and Pages Architecture. 

## 🛠️ Architecture
⚙️ The following is the top-level directory structure:
* 🗝️ Assets - global static assets like photos, svgs
* 🗝️ Layout - wrappers, navigation, form components, and buttons are examples of global shared/reusable components.
* 🗝️ Libs- Javascript services, helpers
* 🗝️ Hooks - constants functions that helps in building functionalities
* 🗝️ Views - can be called as “pages”, the majority of app will be here
* 🗝️ Utils - constants

 ![alt text](https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pages-architecture.png)<br/><br/><br/>

### 📌 Components
Here we will have all the reusable components, which we use in more than one place in our application. One component will be splitted into two files: the javascript or typescript one and the styling one, using SCSS. Also, we can add here a test file and a constant file for this component. 

### 📌 Assets
There we will put all the images, photos, svg, logos that we use in our application.

### 📌 Layout
In this package we will build all the components for our layout. Usually in a web application we will have here the navigation bar, the footer and the main page. Basically, these are static components that will be on our application no matter on what page we are. We will render our content for each page in the main container.

### 📌 Lib
Lib directory contains a lot of things, for example, in the project that I build I put here an api base service that is used all over the application through a hook. Here are the elements of styling that we used all over the application, like colors, text format and some helper SCSS classes. Also, here we define our models that should be one to one with the models from the back-end side.

### 📌 Pages
We want to have an application organized, so we will have a folder for each page. Inside each page’s package we will have components  and other helpers that we use only in that page that help us to build our functionality. In this way we will keep the application clean.

### 📌 Utils
Each application should have a specific folder for constants, routes and other things that will remain the same and we import in our components or containers. This package is useful if you want to change some text or constants, you should only change the values from this package. 
## 📷 Preview  
Some photos about the application, if there are some exiting visual representation and a short description about each feature

<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pg-ionic-dashboard.png">
</p>

## 🛡️ Key Features
Some explenations about what this application brings. You can use here some bullets points.
* Efficiency: Save time and valuable resources by eliminating the need to build everything from scratch, allowing developers to focus on the unique aspects of their application.
* Customization: Easily customize projects based on specific requirements, such as selecting desired navigation menus, integrating reusable components, and implementing authentication modules.
* Flexibility: Adapt to the ever-evolving industry requirements with the flexibility and ease of use offered by this solution.
* High-Quality Code: The project promotes robust coding standards and design patterns, fostering scalability and maintainability while adhering to industry best practices.
* Collaboration: Standardized coding styles, naming conventions, and architectural models enhance code readability and facilitate collaboration within development teams.
* Future-Ready: Create web applications that are not only visually appealing but also robust and adaptable to future needs.

## 💽 Prerequisites
* ⚙️ Visual Studio Code
* ⚙️ Node
* ⚙️ Typescript
* ⚙️ React

## 🚀 Getting Started
* ⭐ Clone this repository
* ⭐ Run command in terminal `npm install`
* ⭐ Run command in terminal for running locally the project `npm run start`

## 🖥️ Technologies
* 💽 React
* 💽 Typescript
* 💽 HTML
* 💽 SCSS
