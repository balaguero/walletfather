import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardWeb3Component } from './dashboard-web3.component';
import { FormsModule } from '@angular/forms';

import { WalletListModule } from '../../components/wallet-list/wallet-list.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
    {
        path: '',
        component: DashboardWeb3Component,
        children: []
    }
];

@NgModule({
  declarations: [
    DashboardWeb3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

    // Material
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,

    WalletListModule
  ]
})
export class DashboardWeb3Module { }
