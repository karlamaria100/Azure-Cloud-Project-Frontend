import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { PostModel } from '../post.model';
import { Headers } from '@angular/http/src/headers';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private baseUrl: 'http://192.168.0.100:8086/ProiectCuBaietii';
  constructor(private http: Http) {

  }

  public getAll(): Observable<PostModel[]>{
    let people$ = this.http
      .get('http://52.234.128.222:8080/posts/getAllPosts', {headers: this.getHeaders()})
      .map(this.mapPosts);
      return people$;
  }

  private getHeaders(): Headers {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private mapPosts(response: Response): PostModel[] {
    const r = response.json();
    const posts: PostModel[] = [];
    for (let i = 0; i < r.posts.length; i++){
      let post = <PostModel>({
        id: Number.parseInt(r.posts[i].id),
        description: r.posts[i].description,
        title: r.posts[i].title,
        content: r.posts[i].content,
        like: Number.parseInt(r.posts[i].like)
      });
        posts.push(post);
      }
    return posts;
  }

}
