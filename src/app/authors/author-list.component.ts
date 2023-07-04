import { Component } from '@angular/core';
import { Author, authors } from '../authors.model';
@Component({
  selector: 'author-list',
  template: `
  <author-detail *ngFor="let author of authors" [author] = "author" (select)="onSelected($event)" (delete)="onDeleted($event)
  "></author-detail>
  <br>
  <div>
  curren selected author:{{currentAuthor.firstName}} {{currentAuthor?.lastName}}
  </div>
  `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
    console.log(selectedAuthor);
  }
  onDeleted(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id !== id;
    });
    if(this.currentAuthor.id ===id){
      this.currentAuthor = this.authors[0];
    }
  }
}
