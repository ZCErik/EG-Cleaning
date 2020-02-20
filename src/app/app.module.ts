import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatIconModule, MatTooltipModule, MatButtonModule, MatRadioModule,
  MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatCardModule, MatDialogModule, MatPaginatorModule, MatTableModule, MatCheckboxModule
} from '@angular/material';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';

import { CoreModule } from './core/core.module';
import { EmployeesModule } from './employees/employees.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    EmployeesModule,
    CoreModule,
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
