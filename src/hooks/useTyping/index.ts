import { useEffect, useState } from 'react';

import { useTypingProps } from './type';

const toKorChars = (text: string) => {
  const cCho = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  const cJong = [
    '',
    'ㄱ',
    'ㄲ',
    'ㄳ',
    'ㄴ',
    'ㄵ',
    'ㄶ',
    'ㄷ',
    'ㄹ',
    'ㄺ',
    'ㄻ',
    'ㄼ',
    'ㄽ',
    'ㄾ',
    'ㄿ',
    'ㅀ',
    'ㅁ',
    'ㅂ',
    'ㅄ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  const str = text;
  const cnt = str.length;
  const chars = [];
  let cCode = null;
  for (let i = 0; i < cnt; i++) {
    cCode = str.charCodeAt(i);
    if (cCode == 32) {
      chars.push(' ');
      continue;
    }
    if (cCode < 0xac00 || cCode > 0xd7a3) {
      chars.push(str.charAt(i));
      continue;
    }
    cCode = str.charCodeAt(i) - 0xac00;
    const jong = cCode % 28;
    const jung = ((cCode - jong) / 28) % 21;
    const cho = ((cCode - jong) / 28 - jung) / 21;
    chars.push(cCho[cho]);
    chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28));
    if (cJong[jong] !== '') {
      chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong));
    }
  }
  return chars;
};

export const useTyping = ({ text, isRun, speed = 150 }: useTypingProps) => {
  const [liveText, setLiveText] = useState('');
  const [isDone, setIsDone] = useState<boolean>(false);
  useEffect(() => {
    if (isRun) {
      const typing: string | any[] = [];
      const result = text.split('');
      for (let i = 0; i < result.length; i++) {
        typing[i] = toKorChars(result[i]);
      }
      let texts = '';
      let i = 0;
      let j = 0;
      const imax = typing.length;
      const inter = setInterval(runTyping, speed);
      setIsDone(false);
      function runTyping() {
        if (i <= imax - 1) {
          const jmax = typing[i].length;
          setLiveText(texts + typing[i][j]);
          j++;
          if (j == jmax) {
            texts += typing[i][j - 1];
            i++;
            j = 0;
          }
        } else {
          clearInterval(inter);
          setIsDone(true);
        }
      }
    }
  }, [isRun, speed, text]);
  return { liveText, isDone };
};
