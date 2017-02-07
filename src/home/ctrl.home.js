export default class HomeController {
  constructor(HomeService) {
    this.greeting = 'Hello Bob !';
    this.questions = HomeService.getQuizQuestions();
    this.HomeService = HomeService;
    this.currentIndex = 0;
    this.score = 0;
  }
  onAnswer(qIndex) {
    const questionObject = this.questions[qIndex];
    if (questionObject.userAnswer === questionObject.correctAnswer) {
      this.score += 1;
      questionObject.status = 'Correct';
    } else {
      questionObject.status = 'Wrong';
    }
    this.currentIndex += 1;
    if (this.currentIndex === 5) {
      this.answerScreen = true;
    }
  }
  onReset() {
    this.currentIndex = 0;
    this.score = 0;
    this.answerScreen = false;
    this.questions = this.HomeService.getQuizQuestions();
  }
}

HomeController.$inject = ['HomeService'];
