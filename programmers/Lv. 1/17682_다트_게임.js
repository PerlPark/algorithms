function solution(dartResult) {
  const testCase = dartResult.split(/([S,D,T,*,#])/).filter((v) => !!v);

  const bonusWords = ['S', 'D', 'T'];
  const star = '*';
  const sharp = '#';

  const score = [];

  for (let i = 0; i < testCase.length; i += 1) {
    const curr = testCase[i];

    const bonus = bonusWords.indexOf(curr) + 1;
    if (bonus > 0) {
      score.push(score.pop() ** bonus);
      continue;
    }

    if (curr === star) {
      const prev = score.pop();
      const prevPrev = score.pop();
      if (prevPrev) {
        score.push(prevPrev * 2);
      }
      score.push(prev * 2);
      continue;
    }

    if (curr === sharp) {
      score.push(score.pop() * -1);
      continue;
    }

    score.push(Number(curr));
  }

  return score.reduce((prev, curr) => prev + curr);
}
