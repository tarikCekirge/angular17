import { Component } from '@angular/core';
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
export class AppComponent {
  data = {
    title: 'angular17'
  }
  // coreCourse = COURSES
  coreCourse = [...COURSES]

  // https://github.com/angular-university/angular-course
  onKeyUp(newTitle: string) {
    this.data.title = newTitle
  }

  onCourseSelected(course: Course) {
    console.log('carda tıklandı', course)
  }

  trackCourse(index: number, course: Course) {
    return course.id
  }

  startDate = new Date(2000, 0, 1)
  price = 23.12312312312;
}
