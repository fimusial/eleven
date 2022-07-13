import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from '../models/actor';
import { DataService } from '../services/data.service';
import { Image, ModalGalleryService, ModalGalleryRef } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'eleven-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private readonly profileIdQueryParamName = 'id';
  public readonly dataLocation = '../../assets/data/';
  public readonly currentYear = new Date().getFullYear();
  public readonly data: Actor[];

  public actor: Actor = new Actor();
  public galleryImageSources: string[] = [];

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
    
    this.galleryImageSources = [
      this.dataLocation + this.actor.profilePicturePath,
      ...this.actor.otherPicturesPaths.map(path => this.dataLocation + path)
    ];
  }

  public galleryOnShow(id: number, index: number): void {
    const imagesForModal = this.galleryImageSources.map((x, i) => new Image(i, { img: x }));
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesForModal,
      currentImage: imagesForModal[index]
    }) as ModalGalleryRef;
  }

  private navigateHome() {
    this.router.navigate([ '/' ]);
  }
}
