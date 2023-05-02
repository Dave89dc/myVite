import './style.css';
import {DataService} from './data-service';

console.log('ciao');

getCatsPage().then(data => {
  console.log(data);
})