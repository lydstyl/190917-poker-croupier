export default class MixedCards {
  constructor() {
    this.unMixedCards = [
      'ace_clubs',
      'two_clubs',
      'three_clubs',
      'four_clubs',
      'five_clubs',
      'six_clubs',
      'seven_clubs',
      'eight_clubs',
      'nine_clubs',
      'ten_clubs',
      'jack_clubs',
      'queen_clubs',
      'king_clubs',
      'ace_hearts',
      'two_hearts',
      'three_hearts',
      'four_hearts',
      'five_hearts',
      'six_hearts',
      'seven_hearts',
      'eight_hearts',
      'nine_hearts',
      'ten_hearts',
      'jack_hearts',
      'queen_hearts',
      'king_hearts',
      'ace_spades',
      'two_spades',
      'three_spades',
      'four_spades',
      'five_spades',
      'six_spades',
      'seven_spades',
      'eight_spades',
      'nine_spades',
      'ten_spades',
      'jack_spades',
      'queen_spades',
      'king_spades',
      'ace_diamonds',
      'two_diamonds',
      'three_diamonds',
      'four_diamonds',
      'five_diamonds',
      'six_diamonds',
      'seven_diamonds',
      'eight_diamonds',
      'nine_diamonds',
      'ten_diamonds',
      'jack_diamonds',
      'queen_diamonds',
      'king_diamonds'
    ];

    this.mixedCards = [];

    this.mix(this.unMixedCards);
  }

  /**
   * return an object containing a random pickedCard from an array and the new array without the random card
   */
  rmRandomCard(arrOfCards) {
    const pickedCardIndex = Math.floor(
      Math.random() * Math.floor(arrOfCards.length)
    );
    const pickedCard = arrOfCards[pickedCardIndex];
    const leftArr = arrOfCards.slice(0, pickedCardIndex);
    const rightArr = arrOfCards.slice(pickedCardIndex + 1, arrOfCards.length);
    return { pickedCard, cardsWithoutPicked: leftArr.concat(rightArr) };
  }

  /**
   * get an array and return it randomly mixed
   */
  mix(unMixedCards) {
    if (!unMixedCards.length) {
      return 'mixedCards';
    }
    const tmp = this.rmRandomCard(unMixedCards);
    this.mixedCards.push(tmp.pickedCard);

    this.mix(tmp.cardsWithoutPicked);
  }
}
