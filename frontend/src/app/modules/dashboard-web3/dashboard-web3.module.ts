import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardWeb3Component } from './dashboard-web3.component';

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
    RouterModule.forChild(routes),

    // Material
    MatButtonModule
  ]
})
export class DashboardWeb3Module { }
