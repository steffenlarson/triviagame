import PeopleController from "./Controllers/QuestionsController.js"

class App {
  questionController = new PeopleController();
}

window["app"] = new App();
