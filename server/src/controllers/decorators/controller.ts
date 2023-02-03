import 'reflect-metadata';
import express from 'express';

export const router = express.Router();

export function controller(routePrefix: string) {
	console.log('I am working');
	return function (target: Function) {
		console.log(target.prototype.__proto__);
		for (let key in target.prototype) {
			const routeHandler = target.prototype[key];
		
			const path = Reflect.getMetadata('path', target.prototype, key);
			if (path) {
				router.get(`${routePrefix}${path}`, routeHandler);
			}
		}
	};
}
