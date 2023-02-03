import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
	set(upDate: T): void;
	get<K extends keyof T>(key: K): T[K];
	getAllData(): T;
}
interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(upDate: T): AxiosPromise;
}
interface Events {
	on(eventName: string, callback: () => void): void;
	trigger(eventName: string): void;
}

interface HasId {
	id?: number;
}

export class Model<T extends HasId> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {}

	on = this.events.on;
	trigger = this.events.trigger;
	get = this.attributes.get;

	set(upDate: T): void {
		this.attributes.set(upDate);
		this.events.trigger("change");
	}

	fetch(): void {
		const id = this.get("id");
		if (typeof id !== "number") {
			throw new Error("Cannot fetch without id");
		}
		this.sync.fetch(id).then((res: AxiosResponse) => {
			this.set(res.data);
		});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAllData())
			.then((res: AxiosResponse) => {
				this.trigger("save");
			})
			.catch((err: AxiosResponse) => {
				this.trigger("error");
			});
	}
}
