# Microshop

Microshop is a web application built using React, providing a platform for people to buy products via e-commerce. Our goal is to offer a seamless and enjoyable shopping experience for users.

## Upcoming Enhancements
```sh
Microservice Architecture
   Scalability: Improved performance by breaking down the application into smaller services.
   Maintainability: Easier updates and faster development cycles.
   Reliability: Fault isolation to ensure issues in one service don’t affect the entire application.
Docker Integration
   Consistency: Ensures the application runs the same across different environments.
   Simplified Deployment: Easier to manage and scale the application.
   Efficiency: Lightweight containers improve resource usage and performance.
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Limitations](#limitations)
- [Assumptions](#assumptions)

## Installation

1. Clone/Download the repository:
   ```sh
   For cloning: git clone https://github.com/AnjumAbdullah/Microshop.git
                cd Microshop
   or
   For downloading: download the repository as a ZIP file.
                    extract the ZIP file.
                    open the project in Visual Studio Code:
                    Open Visual Studio Code 
                    Go to File > Open Folder....
                    Select the extracted directory (e.g., Microshop).
                     
   ```
## Important - Make sure Node.js is installed in the system.
```sh
To install Node.js, follow these steps:

Download the Installer:

Go to the Node.js download page.
Download the installer for your operating system (Windows, macOS, or Linux).
Run the Installer:

Open the downloaded file and follow the instructions in the installer.
Make sure to install the necessary tools, including npm (Node.js package manager).
Verify the Installation:

Open a terminal or command prompt.
Run the following commands to verify that Node.js and npm were installed correctly:
node -v
npm -v
These commands should display the installed versions of Node.js and npm.
```

2. Install the dependencies: <br />
```sh
        cd Microshop
        npm install
        npm install react-scripts
        npm install firebase
        npm install react-icon
        npm install react-responsive-carousel
        npm install react-firebase-hooks 
```
## Usage
```sh
To start the development server run:
  npm start
```
This will start the application on http://localhost:3000

## Dependencies

The project relies on the following major dependencies:<br />
 ```sh
react: ^18.3.1
react-dom: ^18.3.1
react-icons: ^5.3.0
react-router-dom: ^6.27.0
react-responsive-carousel: ^3.2.23
firebase: ^11.0.1
react-firebase-hooks
```
For a full list of dependencies, refer to the package.json file.
## Limitations

The application is currently set up for use with Firebase as the backend service. Configuration for other backend services is not provided.<br />
The application assumes a basic knowledge of React and JavaScript for further customization and maintenance.<br />
The app must be run in an environment that supports Node.js and npm.<br />

## Assumptions

The user has Node.js and npm installed on their local machine.<br />
The user has basic knowledge of command line operations and web development.<br />
The user will configure Firebase with their own project credentials.<br />

  
   
