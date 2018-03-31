'use strict';

var _config = require('./config.js');

var Config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var boobArr = ['いっぱい！', 'おっぱい！', 'もーみたいなー！', 'E capって巨乳なんですか？']; // Description:
//		iyashichan at es
//
// Author
//	dosome

var heppushiArr = ['ん？', 'あ？', 'は？', '警察読んでください', 'ひっ', 'ありえない……', 'セクハラですよ', 'そうですね', '体脂肪率が、53万のようですね'];

module.exports = function (robot) {
	robot.hear(/おっぱい/i, function (res) {
		res.send(res.random(boobArr));
	});

	robot.respond(/見せ/i, function (res) {
		res.send('まだ準備中だよ');
	});

	robot.respond(/おはよう/i, function (res) {
		res.send('おはよう！');
	});

	robot.respond(/翻訳して (.*)/i, function (res) {
		var errMsg = 'エラーだったよ。……何したの？';
		var transUrl = Config.gasTranslateUrl;
		var word = encodeURIComponent(res.match[1]);
		var requestParam = res.http(transUrl).query({ text: word }).query({ source: 'ja' }).query({ target: 'en' }).get();

		requestParam(function (err, res, body) {
			if (err) {
				res.send(errMsg);
			}

			var bodyToStr = body.toString();
			var bodyStr = bodyToStr.replace(/\r?\n/g, "");
			var resArr = bodyStr.match(/http(s):(.*)"/);
			var resUrl = resArr[0];

			var resultWordResponse = robot.http(resUrl).get();
			res.send(resultWordResponse);
		});
	});
};