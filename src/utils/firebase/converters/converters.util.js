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
