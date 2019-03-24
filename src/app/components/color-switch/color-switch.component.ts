import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-switch',
  templateUrl: './color-switch.component.html',
  styleUrls: ['./color-switch.component.scss']
})
export class ColorSwitchComponent implements OnInit {
  lightMode = true;
  @Output() colorToggle = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.colorToggle.emit(this.lightMode);
  }
}
