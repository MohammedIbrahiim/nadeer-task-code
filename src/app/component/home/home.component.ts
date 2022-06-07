import { Component, OnInit } from '@angular/core';
import { Cliender } from './../../cliender';

import { FormGroup,FormControl,Validator, Validators} from '@angular/forms';

import { loadCldr, L10n} from '@syncfusion/ej2-base';


import * as moment from 'moment';
import * as n1 from  '../../../../node_modules/cldr-data/main/ar/currencies.json'
import * as n2 from '../../../../node_modules/cldr-data/main/ar/timeZoneNames.json';
import * as n3 from '../../../../node_modules/cldr-data/main/ar/numbers.json';
import * as n4 from '../../../../node_modules/cldr-data/main/ar/ca-gregorian.json';
import * as s from '../../../../node_modules/cldr-data/supplemental/currencyData.json';
import * as s2 from '../../../../node_modules/cldr-data/supplemental/numberingSystems.json';
loadCldr(n1, n2, n3, n4, s, s2);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public month: number = new Date().getMonth();
      myMoment=moment(this.month+1 , 'm').format('MMMM');
    x:any[] = []
    session:any[] = []
  M:any[]=[]
  test:any []=[]

    cliender:Cliender[]=[
    {dayname:'ألاربعاء',daynumber:1 , task:'مهام',taskcount:6},
    {dayname:'الخميس',daynumber:2, task:'مهام',taskcount:6},
    {dayname:'الجمعة',daynumber:3, task:'مهام',taskcount:6},
    {dayname:'السبت',daynumber:4, task:'مهام',taskcount:6},
    {dayname:'الاحد',daynumber:5, task:'مهام',taskcount:6},
    {dayname:'الاتنين',daynumber:6, task:'مهام',taskcount:6},
    {dayname:'الثلاثاء',daynumber:7, task:'مهام',taskcount:6},
    {dayname:'الاربعاء',daynumber:8, task:'مهام',taskcount:6},
    {dayname:'الخميس',daynumber:9, task:'مهام',taskcount:6},
    {dayname:'الجمعه',daynumber:10, task:'مهام',taskcount:6},
    {dayname:'السبت',daynumber:11, task:'مهام',taskcount:6},
    {dayname:'الحد',daynumber:12, task:'مهام',taskcount:6},
    {dayname:'الاثنين',daynumber:13, task:'مهام',taskcount:6},
    {dayname:'الثلاثاء',daynumber:14, task:'مهام',taskcount:6},
    {dayname:'الاربعاء',daynumber:15, task:'مهام',taskcount:6},
    {dayname:'الخميس',daynumber:16, task:'مهام',taskcount:6},
  ]
  cliender2:Cliender[]=[
    {dayname:'الجمعه',daynumber:17 , task:'مهام',taskcount:6},
    {dayname:'السبت',daynumber:18, task:'مهام',taskcount:6},
    {dayname:'الاحد',daynumber:19, task:'مهام',taskcount:6},
    {dayname:'الاثنين',daynumber:20, task:'مهام',taskcount:6},
    {dayname:'الثلاثاء',daynumber:21, task:'مهام',taskcount:6},
    {dayname:'الاربعاء',daynumber:22, task:'مهام',taskcount:6},
    {dayname:'الخميس',daynumber:23, task:'مهام',taskcount:6},
    {dayname:'الجمعه',daynumber:24, task:'مهام',taskcount:6},
    {dayname:'السبت',daynumber:25, task:'مهام',taskcount:6},
    {dayname:'الاحد',daynumber:26, task:'مهام',taskcount:6},
    {dayname:'الاثنين',daynumber:27, task:'مهام',taskcount:6},
    {dayname:'الثلاثاء',daynumber:28, task:'مهام',taskcount:6},
    {dayname:'الاربعاء',daynumber:29, task:'مهام',taskcount:6},
    {dayname:'الخميس',daynumber:30, task:'مهام',taskcount:6},

  ]
  constructor() { }

  ngOnInit(): void {
    L10n.load({
      'ar': {
        'calendar': { today: "اليوم"}
      }
    });
  }
  chanege(event:any){
    this.x.push(event.value)
    for (const z of this.x) {
      this.M =z
    }
  }
  registerform:FormGroup = new FormGroup({
    from : new FormControl(null), // form control in angular mean input
    to : new FormControl(null ),
    session : new FormControl(null ),
    numofseat : new FormControl(null),
    users : new FormControl(null),
  })


  // here make method return object :formgroup
  submitregistire(submitinfo:FormGroup){
    this.session.push(submitinfo.value)
  }

  ondelete(id:number){
    this.session.splice(id,1)
  }

}
