import {
  Character,

  Team,
} from './person';

const person1 = new Character('Polina', 'Bowman');
const person2 = new Character('Vika', 'Magician');
const person3 = new Character('Kate', 'Zombie');

window.teams = new Team([person1, person2, person3]);
