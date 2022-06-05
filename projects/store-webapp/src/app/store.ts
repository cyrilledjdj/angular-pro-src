import { BehaviorSubject, Observable, OperatorFunction, pluck } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { State } from './state';

export class Store {
  private subject = new BehaviorSubject<State>({
    playlist: [],
  });
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<any> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, newState: any) {
    this.subject.next({ ...this.value, [name]: newState });
  }
}
