// ==UserScript==
// @name			Mangastream Comment
// @version			0.0
// @description		Nuff said
// @icon			https://mangastream.com/favicon.ico
// @match			https://mangastream.com/read/*/*/tip
// @match			http://mangastream.com/read/*/*/tip
// ==/UserScript==

location.href = location.href.replace('tip', 'end').replace('https', 'http');
