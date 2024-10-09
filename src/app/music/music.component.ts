import { Component } from '@angular/core';
import { MusicService } from './music.service';
import { Music } from './music.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [AsyncPipe],
  styleUrl: './music.component.scss',
  templateUrl: './music.component.html'
})
export class MusicComponent {

  musics$ = new Observable<Music[]>();

  constructor(private musicService: MusicService) {
    this.getRegisteredMusics();
  }

  getRegisteredMusics() {
    this.musics$ = this.musicService.getMusics();
  }
}
