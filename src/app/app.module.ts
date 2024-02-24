import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PickListModule } from 'primeng/picklist';
@NgModule({
  declarations: [AppComponent, DragComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule,
    PickListModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
