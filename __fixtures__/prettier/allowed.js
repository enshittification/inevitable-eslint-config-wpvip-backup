const things = {
	ab: 13,
	cd: 99.99,
	e9: 6e99,
	f7: () => ['x'],
	12: '32',
	ff: (xx) => xx,
	gg: ({ fds }) => fds,
};

const done = [];

for (const thing of Object.keys(things)) {
	done.push(thing);
}

export default {
	things,
};