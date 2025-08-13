import { NgModule } from "@angular/core";
import { App } from "./app";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import routes from "./app.routes";
import { provideHttpClient } from "@angular/common/http";


@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule, RouterModule.forRoot(routes), RouterOutlet],
  providers: [provideHttpClient()]
})
export class AppModule { }
