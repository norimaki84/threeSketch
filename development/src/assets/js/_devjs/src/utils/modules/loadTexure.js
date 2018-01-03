import Entry from '../Core/Entry';

const texLoader = new THREE.TextureLoader();

export default function(imgs, callback) {
	const length = Object.keys(imgs).length;
	const loadedTexs = {};
	let count = 0;

	for (let key in imgs) {
		const k = key;
		if (imgs.hasOwnProperty(k)) {
			texLoader.load(imgs[k], (tex) => {
				tex.repeat = THREE.RepeatWrapping;
				loadedTexs[k] = tex;
				count++;
				if (count >= length) callback(loadedTexs);
			});
		}
	}
}