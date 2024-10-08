import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Music } from "./music.model";

@Injectable({
    providedIn: 'root',
})
export class MusicService {

    private url = environment.api;

    constructor(private httpClient: HttpClient) { }

    getMusics() {
        return this.httpClient.get<Music[]>(`${this.url}/musics`);
    }
}