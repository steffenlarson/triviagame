import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionsService.js";

function _drawQuestion() {
  let template = '<ol>'
  const question = ProxyState.question
  question.forEach(q => template += q.Template)
  document.getElementById('app').innerHTML = template + '<ol>'
}

export default class QuestionController {

  constructor() {

    ProxyState.on('question', _drawQuestion)

    questionService.getQuestion();
  }


}