# AngularCli

## Angular CLI

### 1. Intro and Commands 
Check version of node js installed : node --version
Check version of npm installed : npm --version
Install angular: npm install -g @angular/cli

### 2. Creating a project
Create a project: ng new my-project
Move into the project folder: cd my-project
Launch the default code editor: code . 

### 3. Running the scripts from package.json file
Use the command "npm run" to run any script
Start server: npm run start to run ng serve from package.json file in our case
Build project for production: npm run build to run ng build

### 4. Building project for dev and production
npm run build --env=prod
npm run build --env=dev