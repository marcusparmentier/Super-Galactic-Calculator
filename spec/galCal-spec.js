import { Calculator } from './../js/galCal.js';

describe('Calculator', function(){
  let spaceCal;
  let age;
  let year;
  let month;
  let day;

  beforeEach(function() {
    spaceCal = new Calculator(67, 1950, 12, 6);
  });

  it('should convert age to seconds', function() {
    let result = spaceCal.reduceAgeToSeconds();

    expect(result).toEqual(2113180000);
  });

  it('should return current age using entered birthday', function() {
    let result2 = spaceCal.figureAge();

    expect(result2).toEqual(67);
  });

});
