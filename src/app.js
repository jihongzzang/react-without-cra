import { addNumbers } from './utils/add.js';

import { divideNumbers } from './utils/divide.js';

import { multiplyNumbers } from './utils/multiply.js';

import { subtractNumbers } from './utils/subtract.js';

console.log(addNumbers(1, 1));

console.log(divideNumbers(1, 1));

console.log(multiplyNumbers(1, 1));

console.log(subtractNumbers(1, 1));

const App = () => <h1>Hello World</h1>;

ReactDOM.render(<App />, document.getElementById('root'));
