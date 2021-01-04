


export default class Question {

  constructor({ question, correct_answer, incorrect_answers }) {
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswer = incorrect_answers
  }


  get Template() {
    return `
    
    `
  }
}