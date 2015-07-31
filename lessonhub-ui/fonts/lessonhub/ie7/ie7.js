/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lessonhub\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-profile': '&#xe600;',
		'icon-mail': '&#xe608;',
		'icon-teacher': '&#xe609;',
		'icon-logout': '&#xe60a;',
		'icon-checkmark': '&#xe60b;',
		'icon-cross': '&#xe60c;',
		'icon-lock': '&#xe60d;',
		'icon-arrow-up': '&#xe606;',
		'icon-arrow-down': '&#xe607;',
		'icon-arrow-left': '&#xe601;',
		'icon-arrow-right': '&#xe602;',
		'icon-growth': '&#xe603;',
		'icon-current': '&#xe604;',
		'icon-pre-requisite': '&#xe605;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
