# Sistema esteticas WEB  

## Prerequisites to develop
* [NodeJS 16.5.0](https://nodejs.org/)
   
## Built With
*  [Angular v15](https://angular.io/) - Programming framework
*  [Bootstrap v5](https://getbootstrap.com/) - CSS framework (only for utilities)
*  [Angular Material v15](https://material.angular.io/) - Material Design components for Angular
*  [AdminLTE](https://adminlte.io/) - Framework

## Getting started
```
git clone git@git.openearth.community:IOTALARMS/frontend-web.git
cd frontend-web
npm install
```

## Run projects
In this Angular projects there is two subprojects. location and remote-control. to run each project you have to run `ng serve`.
```
```

## Contributing
### Branches & Commits
You will find yourself with 3 main branches, inspired by [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow. 

The branch `develop` is the development branch. Any feature, bugfix, refactor, etc. should branch from `develop`, and merged to it through a proper pull request. These branches should be named according to the main issue the branch is solving. For example, if a new feature is being developed, the branch created from `develop` should be named `feature/nameOfTheFeature`. In case a bugfix, the branch should be named `bugfix/bugBeingFixed`, and in case of a refactor it should be named `refactor/refactorBeingMade`.

The branch `qa` holds any release candidate that needs further QA before being released. The branch `develop` should be merged to `qa` once the development team considers the new features, bugfixes, etc. are ready to be tested in depth and could be considered a release candidate.

Finally, the branch `production` holds a stable version of the repo, despite of the major version.  This branch should hold any release candidate that has been tested and its consider stable for production.

## Documentation

## URLs
* Angular
    * **Endpoint:** http://{HOST}:{EX_FRONT_ANGULAR_HTTP_PORT} for example ```http://localhost:2000```
  

## Testing

* **Static code analysis:** We use tslint for static code analysis. You can run the ```npm run lint``` command to verify that the code complies with the rules defined in the tslint.json file.
* **Unit Tests:** Run the ```ng test``` command.
* **End To End Tests:**  Run the command ```npx webdriver-manager update``` and then```ng e2e```.
  

## Contributors

- **Jose Flores** - _Inequality_
- **Ponce Jose** - _Inequality_



# Code Guidelines
## Naming Conventions
In all convections use english language
- **Files and Directores:** Use kebab-case (e.g., 'my-component.ts', 'my-component.css')
- **Classes:** Use PascalCase (e.g., MyClass, ServiceClass)
- **Functions:** Use camelCase (e.g., doSomething(), onDelete(), applySomething())
- **Variables:** Preferent use camelCase, in case variables is from api use snake_case (e.g. currentTime, localCount, alarm_id)
- **Constants:** Use UPPER_SNAKE_CASE (e.g, CURRENT_VERSION)


## Component Guidelines
- Use standalone components. (standalone: true in component.ts)
- Use suffix Component (e.g., ButtonComponent, NavbarComponent)
- Use Angular CLI to generate components to ensure consistency
`ng generate component my-component --standalone`
