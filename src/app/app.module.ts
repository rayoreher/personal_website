import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DndComponent } from './dnd/dnd.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, DndComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
