import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLoggedIn: Boolean;
  private isLoggedInSubscription: Subscription;

  constructor(
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isLoggedInSubscription = this._authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

}
