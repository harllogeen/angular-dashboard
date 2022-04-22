import { Component, OnInit } from '@angular/core';
import { facultylist } from '../facultyinterface';
import { FacultyListService } from '../faculty-list.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  deptAppear:any
  mydepartment:any = ""
  toAppear: boolean=false
  MyFaculty: facultylist []=[]

  constructor(private myfaculty:FacultyListService) { }

  ngOnInit(): void {
    this.MyFaculty = this.myfaculty.getFacultyList()
  }


  display(){
    this.toAppear=!this.toAppear
  }

  displaydept(seyi:any){
    this.deptAppear=seyi.department
  }

  displayProfile(mydeparts:any){
 this.mydepartment=mydeparts
  }
}
