import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() course!: Course;
  @Input() index!: number;
  @Input() count!: number;
  @Input() isFirst!: boolean;
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>()

  onCourseViewed() {
    console.log('click');
    this.courseEmitter.emit(this.course);
  }

  isImagaVisible() {
    return this.course && this.course.iconUrl
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
    return
  }

  // cardClasses() {
  //   return {
  //     'beginner': this.course.category == 'BEGINNER'
  //   }
  // }

  cardStyles() {
    return { 'text-decoration': 'underline' }
  }
}
