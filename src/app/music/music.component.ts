import { Component } from '@angular/core';
import { MusicService } from './music.service';
import { Music } from './music.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  styleUrl: './music.component.scss',
  templateUrl: './music.component.html'
})
export class MusicComponent {

  // Form

  id = '';
  author = '';
  music = '';

  musics$ = new Observable<Music[]>();

  constructor(private musicService: MusicService) {
    this.getRegisteredMusics();
  }

  getRegisteredMusics() {
    this.musics$ = this.musicService.getMusics();
  }

  registerNewMusic() {
    if (!this.music || !this.author) return;

    this.musicService.registerNewMusic({
      author: this.author,
      text: this.music
    }).subscribe(() => this.getRegisteredMusics())
  }
}
