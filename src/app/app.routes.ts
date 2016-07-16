import {RouterConfig} from "@angular/router";
import {Home} from "./home";
import {NoContent} from "./no-content";
import {BbsAsk} from "./bbs/ask";
import {AboutUs} from "./about/us";
import {AboutJoin} from "./about/join";
import {ArticleList} from "./article/list";
import {BookList} from "./book/list";
import {ColumnList} from "./column/list";
import {NewsList} from "./news/list";
import {NewsTrend} from "./news/trend";
import {UserCreate} from "./user/create";
import {ShowcaseList} from './showcase/list';

export const routes:RouterConfig = [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'about',
    children: [
      {path: 'us', component: AboutUs},
      {path: 'join', component: AboutJoin},
    ]
  },
  {
    path: 'article',
    children: [
      {path: 'list', component: ArticleList},
    ]
  },
  {
    path: 'bbs',
    children: [
      {path: 'ask', component: BbsAsk},
    ]
  },
  {
    path: 'book',
    children: [
      {path: 'list', component: BookList},
    ]
  },
  {
    path: 'column',
    children: [
      {path: 'list', component: ColumnList},
    ]
  },
  {
    path: 'news',
    children: [
      {path: 'list', component: NewsList},
      {path: 'trend', component: NewsTrend},
    ]
  },
  {
    path: 'user',
    children: [
      {path: 'create', component: UserCreate},
    ]
  },
  {
    path: 'showcase',
    children: [
      {path: 'list', component: ShowcaseList},
    ]
  },
  {path: '**', component: NoContent},
];
