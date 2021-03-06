import { RouterConfig } from "@angular/router";
import { NoContent } from "./no-content";
import { AboutHome } from "./about/home";
import { AboutUs } from "./about/us";
import { AboutJoin } from "./about/join";
import { LibraryHome } from "./library/home";
import { BookShow } from "./about/book/show";
import { ThreadShow } from "./bbs/thread/show";
import { ArticleShow } from "./library/article/show";
import { ColumnShow } from "./library/column/show";
import { NewsHome } from "./library/news/home";
import { NewsShow } from "./library/news/show";
import { NewsTrend } from "./library/news/trend";
import { AuthorHome } from "./library/author/home";
import { AuthorShow } from "./library/author/show";
import { ThreadCreate } from "./bbs/thread/create";
import { ArticleHome } from "./library/article/home";
import { ColumnHome } from "./library/column/home";
import { ResourceHome } from "./library/resource/home";
import { ResourceShow } from "./library/resource/show";
import { PartnerShow } from "./library/partner/show";
import { PartnerHome } from "./library/partner/home";
import { AboutSite } from "./about/site";
import { BookHome } from "./about/book/home";
import { ShowcaseHome } from "./about/showcase/home";
import { ShowcaseShow } from "./about/showcase/show";
import { BbsHome } from "./bbs/home";
import { BbsHot } from "./bbs/hot/home";
import { BbsMine } from "./bbs/mine/home";
import { BbsLatest } from "./bbs/latest/home";
import { BbsReward } from "./bbs/reward/home";
import { UserLogin } from "./bbs/user/login";
import { UserHome } from "./bbs/user/home";

export const routes: RouterConfig = [
  {path: '', pathMatch: 'full', redirectTo: '/bbs/mine',},
  {
    path: 'bbs', component: BbsHome,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: '/bbs/mine'
      },
      {
        path: 'thread',
        children: [
          {path: '', pathMatch: 'full', component: ThreadCreate},
          {path: 'show/:id', component: ThreadShow},
          {path: 'create', component: ThreadCreate},
        ]
      },
      {
        path: 'mine',
        children: [
          {path: '', component: BbsMine},
          {path: 'show/:id', component: ThreadShow},
        ]
      },
      {
        path: 'hot',
        children: [
          {path: '', component: BbsHot},
          {path: 'show/:id', component: ThreadShow},
        ]
      },
      {
        path: 'latest',
        children: [
          {path: '', component: BbsLatest},
          {path: 'show/:id', component: ThreadShow},
        ]
      },
      {
        path: 'reward',
        children: [
          {path: '', component: BbsReward},
          {path: 'show/:id', component: ThreadShow},
        ]
      },
      {
        path: 'user',
        children: [
          {path: '', component: UserHome},
          {path: 'login', component: UserLogin},
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
    path: 'library',
    children: [
      {path: '', pathMatch: 'full', component: LibraryHome},
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
