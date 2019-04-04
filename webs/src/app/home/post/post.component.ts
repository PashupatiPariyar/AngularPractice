import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostModel } from 'src/app/models/post.model';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: PostModel = new PostModel();
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<PostComponent>) { }

  ngOnInit() {

    this.postForm = this.formBuilder.group({
      'title':[this.post.title,[
        Validators.required
      ]],

      'description':[this.post.description,[
        Validators.required,
        Validators.maxLength(1000)
      ]]
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
