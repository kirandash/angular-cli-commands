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

### 8. Installing Bootstrap
npm install bootstrap
angular.json file
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
]

### 9. npm start or ng serve with Advanced options
ng serve: Builds the files in memory and launches on a port. Also refreshes automatically when there is any code change
Change package.json file
ng serve --open: After launching the app, open it in browser: 
ng serve --port=9099 --open: Compile, build the files and Launch app on port 9099 and open in browser

skip
ng serve --host=kirandash.com --open (Note that the host name must be present in hosts file located at: c:\Windows\System32\Drivers\etc\hosts as 127.0.0.1 kirandash.com)

### 10. ng generate component
ng generate --help (To see all the options we have)
ng g c recipe-item --dry-run (To see what will happen if you run the command)
ng g c recipe-item --flat --dry-run (--flat option the components are directly created under app folder without it's own folder)
ng g c recipe-item (To actually render the component folder) Note that this component is used in app module

### 11. ng generate module
ng g m main-items (Generate a module)
ng g c main-items/recipe-main-item --module=main-items

### 12. ng generate directive
ng g d main-items/directives/custominput --module=main-items (ng gen dir path modulename)

### 13. ng g service
ng g s my-services/recipe-api

### 14. ng g pipe
ng g p pipes/addcommas (The pipe is added by default to app.module)
ng g p pipes/removecommas --module=main-items

### 15. ng generate class
ng g class class/recipe

### 16. ng generate interface and enums
Interfaces helps us define data types for our data with the help of data (No need of creating classes, if there is no logic)
ng g interface interfaces/recipe
ng g enum enums/recipe-type

### 17. ng generate guard
(Route Guard helps us protect certain routes)
ng generate guard payment
Import the guard in app module providers
And modify the guard code.

### 18. Building Angular Application
Angular cli uses the command: ng build with webpack and does the following things for us: 
Compile typescript files,
build all packages,
minify files,
compiling scss to css,
inlining css,
adding scoped css,
moving assets etc.

ng build
output: dist folder
By default it runs in development mode (Thus non optimized files in dist folder)
ng build --prod (It will now have optimized files in dist folder)

Add another script in package.json file
npm run build:prod

skip
ng build --prod --stats-json
http://webpack.github.io/analyse/