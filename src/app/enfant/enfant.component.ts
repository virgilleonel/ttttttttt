import {Component, Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit{
  @Input () ValueChild:any;

    ngOnInit(){
        console.log('ma variable est:', this.ValueChild)
}



}

