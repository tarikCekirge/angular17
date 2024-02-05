import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('courseImage') courseImage!: ElementRef

  // https://github.com/angular-university/angular-course
  onKeyUp(newTitle: string) {
    this.data.title = newTitle
  }

  onCourseSelected(course: Course) {
    console.log("Cntainer Div: ", this.cardRef)
  }

  trackCourse(index: number, course: Course) {
    return course.id
  }

  startDate = new Date(2000, 0, 1)
  price = 23.12312312312;

  constructor() {
  }
  ngAfterViewInit() {
    console.log("courseImage:  ", this.courseImage);
    this.coreCourse[0].description = "Test1"

  }
}
