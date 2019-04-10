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

### 5. Creating a project with Advanced options
Previously set up routing: ng new my-project-one --routing (This will create a new routing module inside app folder)
Use scss instead of css: ng new my-project-two --style=scss (This will create scss files instead of css files)
Have multiple options: ng new my-project-two --style=scss --routing
ng new my-project-two --style=scss --routing --prefix=bg

### 6. Working with assets folder
npm run build always moves all the assets files also. Lets copy one image into src/assets and npm run build - it will copy the file in to build folder
How to control which files to move or not from assets: Move only img2 folder files from src assets to destination assets
"assets": [
    "src/favicon.ico",
    {
    "glob": "**/*",
    "input": "src/assets/img2",
    "output": "assets/img2"
    }
],
Always a better idea to have all files from assets and controllable files or folders from a new folder eg: misc-assets

### 7. Reset angular.json file
"assets": [
    "src/favicon.ico",
    "src/assets"
],