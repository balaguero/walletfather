import { Wallet } from 'src/app/dto/wallet/Wallet';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss']
})

export class WalletListComponent implements OnInit {

    @Input() wallets: Array<Wallet> = [];

    public columnsToDisplay = ['id', 'walletAddress', 'privateKey', 'actions'];
    public dataSource: MatTableDataSource<Wallet>;

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.dataSource = new MatTableDataSource(this.wallets);
    }
}
