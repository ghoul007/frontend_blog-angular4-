import { Component, OnInit } from '@angular/core';
import {ActorService} from "../../services/actor.service";
import {Actor} from "../../classes/actor";

@Component({
  selector: 'app-actor-list',
  templateUrl: '../../views/actor-list.component.html',
  styleUrls: ['../../views/actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[];
  constructor(private actorService: ActorService) { }
  getActors(): void {
    // this.actorService.getActors().then(actors => this.actors = actors);
    this.actorService.getActorsRest().subscribe(actors => this.actors = actors);
  }
  ngOnInit() {
    this.getActors();
  }
}
