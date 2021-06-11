import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  idRoute = null;
  receita = {};
  
  constructor(
    private ar: ActivatedRoute,
    private firebase: FirebaseService,
  ) { }

  ngOnInit() {
    this.idRoute = this.ar.snapshot.params['id'];

    
    if(this.idRoute) {
      this.firebase.getReceita(this.idRoute).subscribe(carrinho => this.receita = carrinho );
    }
  }

}
