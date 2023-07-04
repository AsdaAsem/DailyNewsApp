import { SearchComponent } from './search/search.component';
import { MyBookmarksComponent } from './my-bookmarks/my-bookmarks.component';
import { CategoryNewsModule } from './category-news/category-news.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category-news/category-news.module').then(
        (m) => m.CategoryNewsModule
      ),
  },
  {
    path: 'bookmarks',
    component: MyBookmarksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
