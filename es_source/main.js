// Description:
//		iyashichan at es
//
// Author
//	dosome

import * as Config from './config.js';

const boobArr = [
	'いっぱい！',
	'おっぱい！',
	'もーみたいなー！',
	'E capって巨乳なんですか？',
];

const heppushiArr = [
	'ん？',	
	'あ？',
	'は？',
	'警察読んでください',
	'ひっ',
	'ありえない……',
	'セクハラですよ',
	'そうですね',
	'体脂肪率が、53万のようですね',
];

module.exports = (robot => {
	robot.hear(/おっぱい/i, res => {
		res.send(res.random(boobArr));
	});

	robot.respond(/見せ/i, res => {
		res.send('まだ準備中だよ');
	});

	robot.respond(/おはよう/i, res => {
		res.send('おはよう！');
	});

});
