import { RouterConfig } from "@angular/router";
import { NoContent } from "./no-content";
import { AboutHome } from "./about/home";
import { AboutUs } from "./about/us";
import { AboutJoin } from "./about/join";
import { BbsHome } from "./bbs/home";
import { BookShow } from "./about/book/show";
import { QuestionHome } from "./home/question/home";
import { QuestionShow } from "./home/question/show";
import { UserCreate } from "./home/user/create";
import { ArticleShow } from "./bbs/article/show";
import { ColumnShow } from "./bbs/column/show";
import { NewsHome } from "./bbs/news/home";
import { NewsShow } from "./bbs/news/show";
import { NewsTrend } from "./bbs/news/trend";
import { AuthorHome } from "./bbs/author/home";
import { AuthorShow } from "./bbs/author/show";
import { QuestionCreate } from "./home/question/create";
import { ArticleHome } from "./bbs/article/home";
import { ColumnHome } from "./bbs/column/home";
import { ResourceHome } from "./bbs/resource/home";
import { ResourceShow } from "./bbs/resource/show";
import { PartnerShow } from "./bbs/partner/show";
import { PartnerHome } from "./bbs/partner/home";
import { AboutSite } from "./about/site";
import { BookHome } from "./about/book/home";
import { ShowcaseHome } from "./about/showcase/home";
import { ShowcaseShow } from "./about/showcase/show";

export const routes: RouterConfig = [
  {path: '', pathMatch: 'full', redirectTo: '/home/question',},
  {
    path: 'home',
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/home/question'},
      {
        path: 'question',
        children: [
          {path: '', pathMatch: 'full', component: QuestionCreate},
          {path: 'show/:id', component: QuestionShow},
          {path: 'create', component: QuestionCreate},
        ]
      },
      {
        path: 'user',
        children: [
          {path: 'create', component: UserCreate},
        ]
      },
    ]
  },
  {
    path: 'about',
    children: [
      {path: '', pathMatch: 'full', component: AboutHome},
      {path: 'us', component: AboutUs},
      {path: 'site', component: AboutSite},
      {path: 'join', component: AboutJoin},
      {
        path: 'book',
        children: [
          {path: '', pathMatch: 'full', component: BookHome},
          {path: 'show/:id', component: BookShow},
        ]
      },
      {
        path: 'showcase',
        children: [
          {path: '', pathMatch: 'full', component: ShowcaseHome},
          {path: 'show/:id', component: ShowcaseShow},
        ]
      },
    ]
  },
  {
    path: 'bbs',
    children: [
      {path: '', pathMatch: 'full', component: BbsHome},
      {
        path: 'article',
        children: [
          {path: '', pathMatch: 'full', component: ArticleHome},
          {path: 'show/:id', component: ArticleShow},
        ]
      },
      {
        path: 'column',
        children: [
          {path: '', pathMatch: 'full', component: ColumnHome},
          {path: 'show/:id', component: ColumnShow},
        ]
      },
      {
        path: 'news',
        children: [
          {path: '', pathMatch: 'full', component: NewsHome},
          {path: 'show/:id', component: NewsShow},
          {path: 'trend', component: NewsTrend},
        ]
      },
      {
        path: 'resource',
        children: [
          {path: '', pathMatch: 'full', component: ResourceHome},
          {path: 'show/:id', component: ResourceShow},
        ]
      },
      {
        path: 'partner',
        children: [
          {path: '', pathMatch: 'full', component: PartnerHome},
          {path: 'show/:id', component: PartnerShow},
        ]
      },
      {
        path: 'author',
        children: [
          {path: '', pathMatch: 'full', component: AuthorHome},
          {path: 'show/:id', component: AuthorShow},
        ]
      },
    ]
  },
  {path: '**', component: NoContent},
];
