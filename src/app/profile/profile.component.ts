import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from '../models/actor';
import { DataService } from '../services/data.service';

import {
  GridLayout,
  Image,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  ModalGalleryService,
  ModalGalleryRef,
  PlainLibConfig
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'eleven-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private readonly profileIdQueryParamName = 'id';
  public readonly dataLocation = '../../assets/data/';
  public readonly data: Actor[];

  public actor: Actor = new Actor();
  public galleryImages: Image[] = [];

  public galleryConfig: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: 'auto', height: '200px' }, { length: 3, wrap: true })
    }
  };

  constructor(
    dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalGalleryService: ModalGalleryService) {
      this.data = dataService.getData();
    }

  ngOnInit(): void {
    const queryParams = this.activatedRoute.snapshot.queryParamMap;

    if (!queryParams.has(this.profileIdQueryParamName)) {
      this.navigateHome();
      return;
    }

    const actorIdFromQueryParams = queryParams.get(this.profileIdQueryParamName);
    const foundActor =this.data.find(actor => actor.id == actorIdFromQueryParams);

    if (!foundActor) {
      this.navigateHome();
      return;
    }

    this.actor = foundActor as Actor;
    
    const actorGalleryImageSources = [
      this.dataLocation + this.actor.profilePicturePath,
      ...this.actor.otherPicturesPaths.map(path => this.dataLocation + path)
    ];

    this.galleryImages = actorGalleryImageSources.map((x, i) => new Image(i, { img: x }));
  }

  public galleryOnShow(id: number, index: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.galleryImages,
      currentImage: this.galleryImages[index]
    }) as ModalGalleryRef;
  }

  private navigateHome() {
    this.router.navigate([ '/' ]);
  }
}
