import { BehaviorSubject, Observable } from 'rxjs';

import { State } from './state';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

const state: State = {
	playlist: []
};

export class Store {
	private subject = new BehaviorSubject<State>(state);
	private store = this.subject.asObservable().pipe(distinctUntilChanged());

	get value() {
		console.log('getting', this.subject.value);
		return this.subject.value;
	}

	select<T>(name: string): Observable<T> {
		console.log('selecting', name);
		return this.store.pipe(pluck(name));
	}

	set(name: string, newState: any) {
		console.log('setting', arguments);
		this.subject.next({ ...this.value, [name]: newState });
	}
}
