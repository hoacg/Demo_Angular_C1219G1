import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedTextComponent } from './red-text/red-text.component';
import { BlueTextComponent } from './blue-text/blue-text.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountdownComponent } from './countdown/countdown.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { ComponentListComponent } from './component-list/component-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ModelDrivenFormComponent
  },
  {
    path: 'customer-list',
    component: ComponentListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RedTextComponent,
    BlueTextComponent,
    NavbarComponent,
    CountdownComponent,
    RemoveSpacesPipe,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    ComponentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
