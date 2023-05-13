

import { useState } from 'react'
import './Calculate.css'

function Result() {
  const [result, setResult] = useState(0);

  function validate() {
    const num1 = document.getElementById('input1').value;
    const num2 = document.getElementById('input2').value;
    if(num1 == ""){
        document.getElementById('emptyNum1').style.display = 'block';
        document.getElementById('res').style.display = 'none'
        document.getElementById('success').style.display = 'none'

    }else{
        document.getElementById('emptyNum1').style.display = 'none';
    }
    if (num2 == '') {
            document.getElementById('emptyNum2').style.display = 'block';
            document.getElementById('res').style.display = 'none'
            document.getElementById('success').style.display = 'none'
    } else{
            document.getElementById('emptyNum2').style.display = 'none';
        }
    }
  

  function performOperation(operation) {
    const num1 = document.getElementById('input1').value;
    const num2 = document.getElementById('input2').value;
    if (operation === '+') {
      setResult(Number(num1) + Number(num2));
    } else if (operation === '-') {
      setResult(Number(num1) - Number(num2));
    } else if (operation === '*') {
      setResult(Number(num1) * Number(num2));
    } else {
      setResult(Number(num1) / Number(num2));
    }
    if(num1 != "" && num2 != ""){
        document.getElementById('res').style.display = 'block'
        document.getElementById('success').style.display = 'block'
    }
  }

  function calculate(event) {
    validate();
    const operation = event.target.innerText;
    performOperation(operation);
  }

  return (
    <div className='div'>
      <input type='text' id='input1' placeholder='Num 1' />
      <input type='text' id='input2' placeholder='Num 2' />
      <div className='btns'>
        <button onClick={calculate}>+</button>
        <button onClick={calculate}>-</button>
        <button onClick={calculate}>*</button>
        <button onClick={calculate}>/</button>
      </div>
      <div id='emptyNum1'>Error : Num1 cannot be empty</div>
      <div id='emptyNum2'>Error : Num2 cannot be empty</div>
      <div id='result'>
        <p id='res'>Result : {result}</p>
        <p id='success'>Success : Your result is shown above!</p>
      </div>
    </div>
  );
}

export default Result;
