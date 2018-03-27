// Description:
//		iyashichan at es
//
// Author
//	dosome

const boobArr = [
	'いっぱい！',
	'おっぱい！',
	'もーみたいなー！',
];

const heppushiArr = [
	'ん？',	
	'あ？',
	'は？',
	'警察呼んでください',
	'ひっ',
	'ありえない',
	'そうですね',
	'ありえない……',
	'セクハラですよ',
];

module.exports = (robot => {
	robot.hear(/aaa/i, res => {
		res.send(res.random(boobArr));
	});
});
