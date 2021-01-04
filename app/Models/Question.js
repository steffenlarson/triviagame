


export default class Question {

  constructor({ question, correct_answer, incorrect_answers }) {
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswer = incorrect_answers
  }


  get Template() {
    return `
    <div>
                <h2> ${this.question} </h2>
                <p>${this.correctAnswer}</p>
                <p>${this.incorrectAnswer}</p>
                <p>${this.incorrectAnswer}</p>
                <p>${this.incorrectAnswer}</p>
            </div>
    `
  }
}