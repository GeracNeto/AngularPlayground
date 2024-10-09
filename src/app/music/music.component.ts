import { Component } from '@angular/core';
import { MusicService } from './music.service';
import { Music } from './music.model';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  styleUrl: './music.component.scss',
  templateUrl: './music.component.html'
})
export class MusicComponent {

  musics: Music[] = [];

  constructor(private musicService: MusicService) {
    this.getRegisteredMusics();
  }

  getRegisteredMusics() {
    this.musicService.getMusics().subscribe(musics => this.musics = musics);
  }
}
