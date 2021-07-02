import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { movies } from '../movies';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  constructor() {}
  films = movies;
  /* 
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];
  */
  ngOnInit() {}
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(movies, event.previousIndex, event.currentIndex);
  }

  addItem(value: string) {
    console.log('AppModule add item');
    let s: string = value[0] + ' ' + value[1] + ' ' + value[2] + ' ' + value[3];
    movies.push(s);
    // this.movies.push(s);
  }
}
