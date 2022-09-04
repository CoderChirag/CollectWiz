export const fsDataConverter = {
	toFirestore: data => {
		const subfoldersMap = {};
		data.subfolders.forEach(subfolder => {
			subfoldersMap[subfolder.name] = subfolder;
		});
		const filesMap = {};
		data.files.forEach(file => {
			filesMap[file.name] = file;
		});
		subfoldersMap.a = {
			name: 'a',
			createdAt: Date.now(),
			creationTime: new Date(),
		};
		subfoldersMap.b = {
			name: 'b',
			createdAt: Date.now(),
			creationTime: new Date(),
		};
		filesMap.ab = {
			name: 'ab',
			ext: 'txt',
			nameWithExt: 'ab.txt',
			createdAt: Date.now(),
			creationTime: new Date(),
		};
		filesMap.ba = {
			name: 'ba',
			ext: 'pdf',
			nameWithExt: 'ba.pdf',
			createdAt: Date.now(),
			creationTime: new Date(),
		};
		return {
			subfolders: subfoldersMap,
			files: filesMap,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		const subfolders = [];
		for (const key in data.subfolders) {
			subfolders.push(data.subfolders[key]);
		}
		const files = [];
		for (const key in data.files) {
			files.push(data.files[key]);
		}
		return {
			subfolders: subfolders,
			files: files,
		};
	},
};
