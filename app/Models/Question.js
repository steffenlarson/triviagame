import shuffle from "../Utils/ShuffleFunc.js";


export default class Question {

  constructor({ question, correct_answer, incorrect_answers }) {
    // this.answers = shuffle(...incorrect_answers, correct_answer)
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswer = incorrect_answers
  }


  get Template() {
    return `
    <div>
                <h2> ${this.question} </h2>
                <button>${this.correctAnswer}</button>
                <button>${this.incorrectAnswer}</button>
                <button>${this.incorrectAnswer}</button>
                <button>${this.incorrectAnswer}</button>
            </div>
    `
  }
}