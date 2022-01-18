import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';


// Component
import { WalletListComponent } from './wallet-list.component';

@NgModule({
    declarations: [
        WalletListComponent
    ],
    imports: [
        CommonModule,
        RouterModule, 
        FlexLayoutModule,
        MatTableModule
    ],
    exports: [
        WalletListComponent
    ]
})
export class WalletListModule { }
