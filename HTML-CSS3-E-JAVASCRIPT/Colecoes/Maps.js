function getAdmins (map) {
	let admins = [];
	for ([key, value] of map) {
		if (value === 'Admin') {
			admins.push(key);
		}
	}
	return admins;
}

const usuario = new Map();

userRoles.set('Luiz', 'Admin');
userRoles.set('Stephany', 'Admin');
userRoles.set('Jorge', 'User');
userRoles.set('Natália', 'Admin');

console.log(getAdmins(usuarios));