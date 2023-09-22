import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExampleComponent } from './components/example/example.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'user', component: UserListComponent },
      { path: 'example', component: ExampleComponent },
      { path: '**', redirectTo: 'user' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
