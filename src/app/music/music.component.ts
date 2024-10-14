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

  actionForm() {
    if (!this.music || !this.author) return;

    if (this.id) {
      this.updateMusic()
      return
    }

    this.musicService.registerNewMusic({
      author: this.author,
      text: this.music
    }).subscribe(() => this.getRegisteredMusics())
  }

  editMusic(music: Music) {
    this.id = music.id!.toString()

    this.music = music.text
    this.author = music.author
  }

  updateMusic() {
    this.musicService.editMusic({
      id: this.id,
      author: this.author,
      text: this.music
    }).subscribe(() => this.getRegisteredMusics())
  }

  deleteMusic(id: string) {
    this.musicService.deleteMusic(id).subscribe(() => this.getRegisteredMusics())
  }
}
