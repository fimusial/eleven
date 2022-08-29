import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Actor } from '../models/actor';
import { DataService } from '../services/data.service';
import { Image, ModalGalleryService, ModalGalleryRef } from '@ks89/angular-modal-gallery';
import { Sex } from '../models/sex';
import { TranslatePipe } from '../services/translate.pipe';

@Component({
  selector: 'eleven-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private readonly profileIdQueryParamName = 'id';
  public readonly dataLocation = '../../assets/data/';
  public readonly data: Actor[];

  public sexEnum = Sex;
  public actor: Actor = new Actor();
  public galleryImageSources: string[] = [];

  constructor(
    dataService: DataService,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private modalGalleryService: ModalGalleryService,
    public translate: TranslatePipe) {
      this.data = dataService.getData();
    }

  ngOnInit(): void {
    const queryParams = this.activatedRoute.snapshot.queryParamMap;

    if (!queryParams.has(this.profileIdQueryParamName)) {
      this.navigateHome();
      return;
    }

    const actorIdFromQueryParams = queryParams.get(this.profileIdQueryParamName);
    const foundActor = this.data.find(actor => actor.id === actorIdFromQueryParams);

    if (!foundActor) {
      this.navigateHome();
      return;
    }

    this.actor = foundActor as Actor;
    
    this.titleService.setTitle('Eleven - ' + this.actor.name);

    this.galleryImageSources = [
      this.dataLocation + this.actor.profilePicturePath,
      ...this.actor.otherPicturesPaths.map(path => this.dataLocation + path)
    ];
  }

  public onShowGallery(id: number, index: number): void {
    const imagesForModal = this.galleryImageSources.map((x, i) => new Image(i, { img: x }));
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesForModal,
      currentImage: imagesForModal[index]
    }) as ModalGalleryRef;
  }

  public getEnumArrayTranslatedAndJoined(locations: string[]) {
    return locations.map(x => this.translate.transform(x)).join(", ");
  }

  private navigateHome() {
    this.router.navigate([ '/' ]);
  }
}
