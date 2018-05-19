function loadImage(url, count) {
	if (arguments !== 3) return;

	var me = this,
		imgs = document.createDocumentFragment();

	for (var i = 1; i <= count; i++) {

		var img = new Image();

		img.index = i;
		img.onload = function(){
			var cvs = getContext('2d');
			cvs.width = me.width;
			cvs.height = me.height;
			cvs.drawImage(me, 0, 0);
		}
		img.src = url + i + '.jpg';
		imgs.appendChild(img);
	}

	me.appendChild(imgs)

}
