import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
	{
    path: "lazy1",
    loadChildren: "./pages/lazy1/lazy1.module#Lazy1Module"
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' } )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
