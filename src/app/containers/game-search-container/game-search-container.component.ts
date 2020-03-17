import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-search-container',
  templateUrl: './game-search-container.component.html',
  styleUrls: ['./game-search-container.component.scss']
})
export class GameSearchContainerComponent implements OnInit {

  public searched: boolean = false;

  public formControl: FormGroup = new FormGroup({
    gameId: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(20)
    ]),    
    name: new FormControl('', [
      Validators.maxLength(20)
    ])
  });

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public searchGame(): void {
    this.searched = true;
    if (this.formControl.invalid) return;

    const gameId: string = this.formControl.get('gameId').value;
    const name: string = this.formControl.get('name').value;
    if (name.length == 0) {
      this.router.navigate(['/log/', gameId]);
    } else {
      this.router.navigate(['/log/', gameId], {
        queryParams: {
          name: name
        }
      });
    }
  }
} 
