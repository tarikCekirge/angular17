import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {


  data = {
    title: 'angular17'
  }
  // coreCourse = COURSES
  coreCourse = [...COURSES]

  // @ViewChild(CardComponent) card!: CardComponent;
  @ViewChild('cardRef', { read: ElementRef }) cardRef!: ElementRef;
  @ViewChild('courseImage') courseImage!: ElementRef;

  @ViewChildren(CardComponent, { read: ElementRef }) cards!: QueryList<CardComponent>;

  onKeyUp(newTitle: string) {
    this.data.title = newTitle
  }

  onCourseSelected(course: Course) {
    console.log("Cntainer Div: ", this.cardRef)
  }

  trackCourse(index: number, course: Course) {
    return course.id
  }
  ngAfterViewInit() {
    // this.cards.changes.subscribe(
    //   cards => console.log(cards)
    // )
    console.log("Cards: ", this.cards)

  }


  onCoursesEdited() {
    this.coreCourse.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        lessonsCount: 10,
        category: 'INTERMEDIATE'
      }
    )
  }

}
