export class Calculator {

  constructor(age) {
    this.age = parseInt(age);
}

  reduceAgeToSeconds(age) {
    return age * 31536000;
  }

}
