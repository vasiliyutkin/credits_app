import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { SixthPageComponent } from './sixth-page/sixth-page.component';

const defaultRedirectionRoute: Route = { path: '', redirectTo: '/main', pathMatch: 'full' };

const mainRoute: Route = {
  path: 'main',
  component: MainPageComponent
};

const secondRoute: Route = {
  path: 'second',
  component: SecondPageComponent
};

const thirdRoute: Route = {
  path: 'third',
  component: ThirdPageComponent
};

const fourthRoute: Route = {
  path: 'fourth',
  component: FourthPageComponent
};

const fifthRoute: Route = {
  path: 'fifth',
  component: FifthPageComponent
};

const sixthRoute: Route = {
  path: 'sixth',
  component: SixthPageComponent
};

const routes: Routes = [defaultRedirectionRoute, mainRoute, secondRoute, thirdRoute, fourthRoute, fifthRoute, sixthRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
