import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Component
import { LoadingComponent } from './loading.component';

@NgModule({
    declarations: [
        LoadingComponent
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        LoadingComponent
    ]
})
export class LoadingModule { }
