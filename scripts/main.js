// Description:
//		iyashichan at es
//
// Author
//	dosome

const boobArr = [
	'$B$$$C$Q$$!*(B',
	'$B$*$C$Q$$!*(B',
	'$B$b!<$_$?$$$J!<!*(B',
];

const heppushiArr = [
	'$B$s!)(B',	
	'$B$"!)(B',
	'$B$O!)(B',
	'$B7Y;!8F$s$G$/$@$5$$(B',
	'$B$R$C(B',
	'$B$"$j$($J$$(B',
	'$B$=$&$G$9$M(B',
	'$B$"$j$($J$$!D!D(B',
	'$B%;%/%O%i$G$9$h(B',
];

module.exports = (robot => {
	robot.hear(/aaa/i, res => {
		res.send(res.random(boobArr));
	});
});
