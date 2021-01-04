import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { trivapi } from "../Services/AxiosService.js"


class QuestionService {

  async getQuestion() {
    let res = await trivapi.get()
    // debugger
    ProxyState.question = res.data.results.map(q => new Question(q))
  }

}

export const questionService = new QuestionService();