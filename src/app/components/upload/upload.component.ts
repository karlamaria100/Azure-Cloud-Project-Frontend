import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/services/post.service';
import { PostModel } from 'app/post.model';
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public title: string;
  public desc: string;
  public post: PostModel;
  public image: File;

 // constructor(private postSVC: PostService) { }
  public text: string;
  constructor( private http: Http, private router: Router ){
    this.text = 'Upload Image';
  }

  ngOnInit() {
  }

  // public upload() {
  //   this.post = new PostModel();
  //   this.post.title = this.title;
  //   this.post.description = this.desc;
  // }

  fileChangeEvent(fileInput: any)  {
    if (fileInput.target.files && fileInput.target.files[0]) {

      this.image=fileInput.target.files[0];

      var reader = new FileReader();
      reader.onload = function (e : any) {

        // ('#image').attr('src', e.target.result);
        console.log(fileInput.target.files[0]);


      }

      reader.readAsDataURL(fileInput.target.files[0]);

    }
  }


  uploadimage(){
    var formData = new FormData();
    // formData.append('file', this.image, this.image.name);
    // // let headers = new Headers();
    // /** No need to include Content-Type in Angular 4 */
    // // this.headers.append('Content-Type', 'multipart/form-data');
    // // this.headers.append('Accept', 'application/json');
    // // let options = new RequestOptions({ headers: this.headers });
    // this.http.post('http://192.168.0.100:8086/ProiectCuBaietii/posts/addPost', formData)
    //   .map(res => res.json()).subscribe(
    //     data => console.log('success'),
    //     error => console.log(error)
    //   );


    formData.append('file', this.image );
    return this.http.post('http://52.234.128.222:8080/posts/addPost', formData)
      .map(response =>response.json()).subscribe(
        result=>{
          this.text="image uploaded successfully";
          console.log("image uploaded");
          this.router.navigate(['/']);
        },
        error=>{
          this.text="Some Error in image Uploading";
          console.log(error);
        });
  }

}
