# 💻 Stocks Management Project
This is a web application through you can manage your stocks in different domains, for example if you have a shop with some products, you can keep track the whole workflow from supplier to clients.
The main purpose of this application is to dive deeper inside the Clean Architecture and Pages Architecture. 

## 🛠️ Architecture
⚙️ The following is the top-level directory structure:
* Assets - global static assets like photos, svgs
* Layout - wrappers, navigation, form components, and buttons are examples of global shared/reusable components.
* Libs- Javascript services, helpers
* Hooks - constants functions that helps in building functionalities
* Views - can be called as “pages”, the majority of app will be here
* Utils - constants

<p align="center">
 <img src="https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pages-architecture.png">
</p>

Here we will have all the reusable components, which we use in more than one place in our application. One component will be splitted into two files: the javascript or typescript one and the styling one, using SCSS. Also, we can add here a test file and a constant file for this component. 
There we will put all the images, photos, svg, logos that we use in our application. In this package we will build all the components for our layout. Usually in a web application we will have here the navigation bar, the footer and the main page. Basically, these are static components that will be on our application no matter on what page we are. We will render our content for each page in the main container. Lib directory contains a lot of things, for example, in the project that I build I put here an api base service that is used all over the application through a hook. Here are the elements of styling that we used all over the application, like colors, text format and some helper SCSS classes. Also, here we define our models that should be one to one with the models from the back-end side. We want to have an application organized, so we will have a folder for each page. Inside each page’s package we will have components  and other helpers that we use only in that page that help us to build our functionality. In this way we will keep the application clean. Each application should have a specific folder for constants, routes and other things that will remain the same and we import in our components or containers. This package is useful if you want to change some text or constants, you should only change the values from this package. 

## 📷 Preview  
Here is a visual representation of the home page:

<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/stocks-management-web/blob/master/photos/sm-dashboard.png">
</p>

Here it can be observed a preview of the statistics page:

<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/stocks-management-web/blob/master/photos/sm-statistics.png">
</p>

## 🛡️ Key Features
* Modular Structure: Pages are organized as modular components, making it easy to develop, maintain, and scale the application. Each page is encapsulated as an independent component with its own logic and styling.
* Reusable Components: Common UI elements, such as headers, footers, and navigation menus, are built as reusable components that can be easily integrated into multiple pages, ensuring consistency and saving development time.
* Routing: Utilizes a routing library (e.g., React Router) to manage page navigation and ensure that each page corresponds to a unique URL route. This enables deep linking, bookmarking, and easy navigation within the application.
* State Management: Implements state management, often using tools like React's Context API or third-party libraries such as Redux, to manage the application's state and data flow efficiently across pages.
* Dynamic Loading: Utilizes code-splitting techniques to load page components dynamically, improving initial load times and optimizing performance. Lazy loading ensures that only necessary code is fetched when navigating to a specific page.
* Page Lifecycle: Pages often follow a lifecycle pattern that defines actions to be taken when a page is loaded, updated, or unloaded. This pattern supports various features such as data fetching, authorization checks, and cleanup routines.
* Data Fetching: Handles data retrieval for the specific page, whether through API calls, local storage, or other sources. Data fetching is often coordinated with page lifecycle events to ensure that data is available when the page loads.

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
