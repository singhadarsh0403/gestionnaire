import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import{AppComponent} from '../app/app.component'
import{EditEntityComponent} from './edit-entity/edit-entity.component';
import{FillComponent} from './fill/fill.component';
import{SearchComponent} from './search/search.component';
import{ClassComponent} from './class/class.component';

const routes: Routes = [
  // {path:'', component:AppComponent},
  { path: 'edit-entity',component:EditEntityComponent },
  { path: 'fill',component:FillComponent },
  { path: 'search',component:SearchComponent },
  { path: 'class', component:ClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
