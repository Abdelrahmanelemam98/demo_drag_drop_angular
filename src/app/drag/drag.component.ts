import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DragComponent implements OnInit {
  sourceProducts!: any[];

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.sourceProducts = [
      {
        name: 'any',
        category: 'any',
        price: 23,
      },
      {
        name: 'any',
        category: 'any',
        price: 23,
      },
      {
        name: 'any',
        category: 'any',
        price: 23,
      },
    ];
  }
}
