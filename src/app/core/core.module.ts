import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequestInterceptor } from './auth/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { AlertModule } from '../shared/components/alert/alert.module';
import { LoadingModule } from '../shared/components/loading/loading.module';

@NgModule ({
    declarations: [ HeaderComponent, FooterComponent ],
    exports: [ 
        HeaderComponent,
        FooterComponent
          
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        AlertModule,
        LoadingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})

export class CoreModule{}