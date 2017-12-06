import { Calculator } from './../js/galCal.js';

describe('Calculator', function(){
  let spaceCal;
  let age;

  beforeEach(function() {
    spaceCal = new Calculator();
    age = '25';
  });

  it('should convert age to seconds', function() {
    let result = spaceCal.reduceAgeToSeconds(age);

    expect(result).toEqual(788400000);
  });

});
