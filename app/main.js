import ValuesController from "./Controllers/ValuesController.js";
import PeopleController from "./Controllers/QuestionsController.js"

class App {
  valuesController = new ValuesController();
  questionController = new PeopleController();
}

window["app"] = new App();
