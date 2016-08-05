import { Injectable } from "@angular/core";
import { Question } from "../../_common/models/question";
import { Observable } from "rxjs/Rx";
const items: Question[] = [];
@Injectable()
export class QuestionApi {
  items: Observable<Question> = Observable.from(items);
}
