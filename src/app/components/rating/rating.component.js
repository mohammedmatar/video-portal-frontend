export class RatingComponentController{
  constructor($window){
    'ngInject';
    this.$window = $window;
  }
  getRank(ratings = []){
    const SUM_OF_MAX_RATINGS = 50;
    if( ratings.length > 0){
      let sumOfRatings = ratings.reduce((a, b)=>{
        return a+b;
      });
      // return this.$window.Math.abs( ( SUM_OF_MAX_RATINGS - (sumOfRatings+10) ) / 5 );
      let negative = ((( SUM_OF_MAX_RATINGS - (sumOfRatings+10) ) / 5) ^ ((( SUM_OF_MAX_RATINGS - (sumOfRatings+10) ) / 5) >> 31)) - ((( SUM_OF_MAX_RATINGS - (sumOfRatings+10) ) / 5) >> 31);
      let simulationNegative = [];
      let rankArray = [];
      for (let noStar = 1; noStar <= negative; noStar++){
        simulationNegative.push(0);
      }
      for (let star = 1; star <= ( 5 - simulationNegative.length ); star++){
        rankArray.push(1);
      }
      return rankArray.concat(simulationNegative);
    }
    return -1;
  }
}
