import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public currentPage: number = 1;
  public totalPages: Array<number> = [];
  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 0;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change['totalRecords'].currentValue || change['recordsPerPage'].currentValue) {
      this.calculateTotalPages();
    }
  }

  calculateTotalPages() {
    const count = Math.ceil(this.totalRecords / this.recordsPerPage);
    this.totalPages = Array.apply(0, Array(count)).map((element: unknown, index: number) => index + 1);
    console.log(this.totalPages);
  }

  changePage(newPage: number) {
    if (newPage === this.currentPage) return;
    this.currentPage = newPage;
    this.pageChanged.emit(this.currentPage);
  }

}
