// Description:
//		iyashichan at es
//
// Author
//	dosome

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

	robot.respond(/(.*)$/i, res => {
		name = res.message.user.name.toLowerCase();
		if (name == 'heppushi') {
			res.send(res.random(heppushiArr));
		}
		return;
	});

});
