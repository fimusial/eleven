import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslatePipe } from '../services/translate.pipe';

@Component({
  selector: 'eleven-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  
  private readonly actorNameQueryParamName = 'actorName';
  public done: boolean = false;
  public attachment: File | null = null;

  public form = new FormGroup({
    senderName: new FormControl<string>('', [Validators.required]),
    replyTo: new FormControl<string>('', [Validators.required, Validators.email]),
    subject: new FormControl<string>('', [Validators.required]),
    message: new FormControl<string>('', [Validators.required]),
  });

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private translate: TranslatePipe) {
  }

  ngOnInit(): void {
    const queryParams = this.activatedRoute.snapshot.queryParamMap;

    if (queryParams.has(this.actorNameQueryParamName)) {
      this.form.patchValue({
        subject: `${this.translate.transform('contactForm.subjectPrefix')} - ${queryParams.get(this.actorNameQueryParamName)}`,
      });
    }
  }

  public onFormSubmitted(): void {
    const formData = new FormData();
    formData.append('sender-name', this.form.value.senderName as string);
    formData.append('reply-to', this.form.value.replyTo as string);
    formData.append('subject', this.form.value.subject as string);
    formData.append('message', this.form.value.message as string);
    
    if (this.attachment) {
      formData.append('attachment', this.attachment as File, this.attachment.name);
    }

    this.http.post(environment.mailerUrl, formData).subscribe(() => { });
    this.done = true;
  }

  public onAttachmentChanged(event: Event): void {
    const htmlInput = event.target as HTMLInputElement;
    this.attachment = htmlInput && htmlInput.files && htmlInput.files.length > 0
    ? htmlInput.files[0]
    : null;
  }
}
