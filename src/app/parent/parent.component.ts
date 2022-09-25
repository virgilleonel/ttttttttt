import { Component, } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  inputs:['ValueChild']
})
export class ParentComponent {
   variableParent:string='je viens du parent';
}
