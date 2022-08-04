import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'eleven-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public readonly pdf = 'application/pdf';
  public done: boolean = false;
  public attachment: File | null = null;

  public form = new FormGroup({
    senderName: new FormControl<string>('', { validators: [Validators.required], updateOn: 'blur' }),
    replyTo: new FormControl<string>('', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    subject: new FormControl<string>('', { validators: [Validators.required], updateOn: 'blur' }),
    message: new FormControl<string>('', { validators: [Validators.required], updateOn: 'blur' }),
  });

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.form.patchValue({
      subject: 'Actor name from profile',
    });
  }

  public onFormSubmitted(): void {
    if (!this.form.valid || (this.attachment && this.attachment?.type !== this.pdf)) {
      return;
    }
    
    const formData = new FormData();
    formData.append('sender-name', this.form.value.senderName as string);
    formData.append('reply-to', this.form.value.replyTo as string);
    formData.append('subject', this.form.value.subject as string);
    formData.append('message', this.form.value.message as string);
    formData.append('attachment', this.attachment as File, this.attachment?.name);

    this.http.post(environment.mailerUrl, formData).subscribe(() => {});
    this.done = true;
  }

  public onAttachmentChanged(event: Event): void {
    const htmlInput = event.target as HTMLInputElement;
    this.attachment = htmlInput && htmlInput.files && htmlInput.files.length > 0
    ? htmlInput.files[0]
    : null;
  }
}
