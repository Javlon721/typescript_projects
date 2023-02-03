// import { UserEdit } from './views/UserEdit';
// const root = document.querySelector('.root');
// const user = User.buildUser({ name: 'Name', age: 20 });

// if (root) {
// 	const userEdit = new UserEdit(root, user);
// 	userEdit.render();
// 	console.log(userEdit);
// } else {
// 	throw new Error('Root not found');
// }

import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const users = new Collection(
	'http://localhost:3000/users',
	(json: UserProps) => {
		return User.buildUser(json);
	}
);
users.on('change', () => {
	const root = document.querySelector('.root');
	if (root) {
		new UserList(root, users).render();
	}
});
users.fetch();
