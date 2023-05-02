import './style.css';
import './data-service';

console.log('ciao');

getCatsPage().then(data => {
  console.log(data);
})