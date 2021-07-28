//변수 선언
// 숫자 저장 배열
let numArray = [];
// C버튼 클릭 카운트
let count = 0;

const $resultDiv = document.querySelector('#result');

// input 창
let $show = document.getElementById('show');


//함수 정의
// 숫자 함수
function addNum(num) {
  $show.value += num;
  $show.setAttribute('value', $show.value);
  $resultDiv.textContent += num;
}

// 값 상승 함수
function upResult(up) {
  $show.value = up;
}

// 두번 째 연산 div 공백 함수
function diva() {
  if($resultDiv.hasAttribute('value')) {
   
  }
}

// 연산 함수
function calculate(sign) {
  let result = '';
  if (sign === '+' && $show.hasAttribute('value')) {
    $show.value = $show.value + sign;
    $resultDiv.textContent = '';
  } else if (sign === '-' && $show.hasAttribute('value')) {
    $show.value = $show.value + sign;
    $resultDiv.textContent = '';
  } else if (sign === '/' && $show.hasAttribute('value')) {
    $show.value = $show.value + sign;
    $resultDiv.textContent = '';
  } else if (sign === '*' && $show.hasAttribute('value')) {
    $show.value = $show.value + sign;
    $resultDiv.textContent = '';
  } else if (sign === '=' && $show.hasAttribute('value')) {
    
    // answer = (new Function ('return '+$show.value))(); 
    result = eval($show.value); // : 수정코드
    $resultDiv.textContent = result;
    console.log($resultDiv);

    $show.value += ' =';
    upResult(result);
    diva();

     




    // const $resultDiv = document.createElement('div');
    // $resultDiv.setAttribute('id', 'result');
    // const $calTemplete = document.querySelector('.calTemplete');
    // $calTemplete.insertBefore($resultDiv, $show);

    // $show.value = result;
    // $show.setAttribute('value', result);



  }

  // 배열에 값 저장
  numArray.push($show.value);
  console.log(numArray);

}

// .(점) 함수
function dot(point) {
  if ($show.hasAttribute('value')) {

    $show.value += point;
    $show.setAttribute('value', $show.value);

    numArray.push($show.value);
    console.log(numArray);

  }

}




// AC 함수
function allClear() {
  $show.value = '';
  numArray.splice(0, numArray.length);
  console.log(numArray);
  $show.setAttribute('value', '0');
  $resultDiv.textContent = '';
}

/// C 함수
function clear() {
  $show.value = numArray[numArray.length - 1];
  numArray.pop();
  console.log(numArray);

}


// +/-함수
function plusMinus() {
  if ($show.hasAttribute('value')) {

    // 양수를 음수로 음수를 양수로 바꿔주는 변수 선언
    const conversionNum = $show.value + '*(-1)';

    $show.value = conversionNum;
    $show.setAttribute('value', $show.value);
  }
}






//실행부 
(function () {
  const $buttons = document.querySelector('.buttons');
  const $show = document.getElementById('show');
  const $dot = document.querySelector('.dot');
  const $allClear = document.querySelector('.clear');
  const $delete = document.querySelector('.delete');

  // 숫자 버튼 클릭 이벤트 
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.num')) {
      console.log('숫자버튼 클릭!');
      addNum(e.target.textContent);

    }
  });

  // 연산 버튼 클릭 이벤트
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.plus') || e.target.matches('.minus') || e.target.matches('.divisor') || e.target.matches('.mul') || e.target.matches('.answer')) {
      calculate(e.target.textContent);



    }

  });


  //  .(점)버튼 클릭 이벤트
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.dot')) {
      console.log('점 클릭!');
      dot(e.target.textContent);


    }
  })


  // AC버튼 클릭 이벤트
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.clear')) {
      console.log('올클리어 클릭!');
      allClear();

    }

  })

  // C버튼 클릭 이벤트
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.delete')) {
      console.log('삭제 클릭!');
      count = numArray.length + 1;
      count--;
      console.log(count);
      clear();

      if (count === 0) {
        $show.value = '';
      }

    }
  })


  // +/-버튼 클릭 이벤트
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.plusMinus')) {
      console.log('쁠마 클릭!');
      plusMinus();


    }
  })



})();

// 고쳐야 할 오류
//  
//  input창이랑 div창 입력 제한 19자리
//  +/- 수정





// 할 것

// ppt
