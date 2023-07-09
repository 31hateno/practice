/*for (let i = 10; i >= 0; i--) {
  document.write('あと' + i + '日<br>');
}*/ 

/*for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.write('FizzBuzz ');
  } else if (i % 3 === 0) {
    document.write('Fizz ');
  } else if (i % 5 === 0) {
    document.write('Buzz ');
  } else {
    document.write(i + ' ')
  }
}*/

/*let classes = ['a', 'b', 'c'];
document.write(`${classes}<br>`);
classes.push('d');
document.write(`${classes}<br>`);
document.write(`${classes.length}<br>`);*/

/*let classes = ['A', 'B', 'C'];
for (let grade = 1; grade <= 3; grade++) {
  for (let i = 0; i < classes.length; i++) {
    document.write(`${grade}年${classes[i]}組<br>`);
  }
}*/

/*let scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
let maxScore = 0;
for (let i = 0; i < scores.length; i++) {
  if (maxScore < scores[i]) {
    maxScore = scores[i];
  }
}
document.write(`最高得点は${maxScore}ダァーッ！`);*/

/*let a = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (i = 0; i < a.length; i++) {
  for (j = 0; j < a.length; j++) {
    document.write(`${a[i]}${a[j]} `)
  }
  document.write(`<br>`);
}*/

/*let myBirthTime = new Date('1997-05-31 0:15');
function update() {
  let now = new Date();
  let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
  document.getElementById('birth-time').innerText = `生まれてから ${seconds} 秒経過`;
}
setInterval(update, 500);*/

/*function collatz(n) {
  document.write(`nの数が${n}になったお。<br>`);
  if (n === 1) {
    document.write('end');
  } else if (n % 2 === 0) {
    collatz(n / 2);
  } else {
    collatz(n * 3 + 1);
  }
}
collatz(24);*/

/*let game = {
  startTime: null,
  displayArea: document.getElementById('display-area'),
  start() {
    game.startTime = Date.now();
    document.body.onkeydown = game.stop;
  },
  stop() {
    let currentTime = Date.now();
    let seconds = (currentTime - game.startTime) / 1000;
  
    if (4.5 <= seconds && seconds <= 5.5) {
      game.displayArea.innerText = `${seconds}, やるね`;
    } else {
      game.displayArea.innerText = `${seconds}, GOMI`;
    }
  }
};
if (confirm('10byou challenge')) {
  game.start();
}*/

/*let header = document.getElementById('header');
let degree = 0;

function rotator() {
  degree = degree + 6;
  degree = degree % 360;
  if (degree === 90) {
    header.setAttribute('class', 'back');
  } else if (degree === 270) {
    header.setAttribute('class', 'face');
  }
  header.style.transform = `rotateX(${degree}deg)`;
}
setInterval(rotator, 50);*/

'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDiv = document.getElementById('result-area');
const tweetDiv = document.getElementById('tweet-area');

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (!userName) return;

  resultDiv.innerText = '';
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDiv.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDiv.appendChild(paragraph);

  tweetDiv.innerText = '';
  const anchor = document.createElement('a');
  const hrefValue = `https://twitter.com/intent/tweet?button_hashtag=${encodeURIComponent('あなたのいいところ')}&ref_src=twsrc%5Etfw`;
  anchor.setAttribute('href',  hrefValue);
  anchor.setAttribute('class', 'twitter-hashtag-button');
  anchor.setAttribute('data-text', result);
  anchor.innerText= 'Tweet #いいとこ';

  tweetDiv.appendChild(anchor);

  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDiv.appendChild(script);
}

userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    assessmentButton.onclick();
  }
}

const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
  '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
  '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
  '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }
  // document.write(`${userName.length}, ${sumOfCharCode}`);

  const index = sumOfCharCode % answers.length;
  let result = `${answers[index]}`;

  result = result.replaceAll(`###userName###`, userName);
  return result;
}