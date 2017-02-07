export default class HomeService {
  constructor($http) {
    this.$http = $http;
  }
  getQuizQuestions() { //eslint-disable-line
    return [{
      id: 1,
      question: '2+2 ?',
      answerOptions: ['4', '5', '6', '7'],
      correctAnswer: '4',
    },
    {
      id: 2,
      question: '2+1 ?',
      answerOptions: ['2', '3', '4', '5'],
      correctAnswer: '3',
    },
    {
      id: 3,
      question: '2+12 ?',
      answerOptions: ['14', '15', '16', '17'],
      correctAnswer: '14',
    },
    {
      id: 4,
      question: '12+12 ?',
      answerOptions: ['24', '25', '26', '27'],
      correctAnswer: '24',
    },
    {
      id: 5,
      question: '12+22 ?',
      answerOptions: ['34', '35', '36', '37'],
      correctAnswer: '34',
    }];
  }
  static HomeServiceFactory($http) {
    return new HomeService($http);
  }
}
HomeService.HomeServiceFactory.$inject = ['$http'];

