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
  @Input({ required: true }) course!: Course;
  @Input({ required: true }) index!: number;
  @Input({ required: true }) count!: number;
  @Input({ required: true }) isFirst!: boolean;
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>()

  onCourseViewed() {
    console.log('click');
    this.courseEmitter.emit(this.course);
  }

  isImagaVisible() {
    return this.course && this.course.iconUrl
  }
}
