import { Injectable } from "@angular/core";
import { Author } from "../../_common/models/author";
import { Observable } from "rxjs/Rx";
const items: Author[] = [
  {
    id: '雪狼',
    name: '雪狼',
    bio: '好为人师，好为人师',
    description: require('./雪狼.md'),
    avatar: require('./_images/雪狼.jpg'),
    columnist: true,
    homepage: 'https://github.com/asnowwolf/'
  }
];
@Injectable()
export class AuthorApi {
  items: Observable<Author> = Observable.from(items);
}
