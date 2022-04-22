import { Injectable } from '@angular/core';
import { facultylist } from './facultyinterface';

@Injectable({
  providedIn: 'root'
})
export class FacultyListService {

  constructor() { }
  getFacultyList() :facultylist[]{
      return [
        {
          id:1,
          name:'Faculty of Science',
          department : [
            {
              id : 1,
              name :'Alugbin Seyi',
              depart:'Mathematics',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (1).png"
            },
            {
              id : 2,
              name :'Omolara Smith',
              depart:'Chemistry',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2.png"
            },
            {
              id : 3,
              name :'Common Wealth',
              depart:'Physics',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"PORT.jpg"
            },
            {
              id : 4,
              name :'Alugbin Lola',
              depart:'Biology',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (2).png"
            }

          ]
          
        },
        {
          id:2,
          name:'Faculty of Management',
          department : [
            {
              id : 1,
              name :'Dada Abayomi',
              depart:'Accounting',
              date:'04-19-22',
              'join-time':'8:20AM',
              'logout-time':'4:00',
              image:"IMG-20210530-WA0027.jpg"
            },
            {
              id : 2,
              name :'John Sandra',
              depart:'Transport',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (2).png"
            },
            {
              id : 3,
              name :'Common Dear',
              depart:'Marketing',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2.png"
            },
            {
              id : 4,
              name :'Fiesta Vista',
              depart:'Transport',
              date:'04-19-22',
              'join-time':'9:00AM',
              'logout-time':'4:20',
              image:"IMG-20210610-WA0009.jpg"
            }

          ]
         
        },
        {
          id:3,
          name:'Faculty of Engineering',
          department : [
            {
              id : 1,
              name :'Samuel Dada',
              depart:'Computer Science',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (1).png"
            },

            {
              id : 2,
              name :'Omolara Adeleye',
              depart:'Mechanical',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:05',
              image:"Image here2 (1).png"
            },
            {
              id : 3,
              name :'Adebayo Samuel',
              depart:'Civil Engeneering',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (1).png"
            },
            {
              id : 4,
              name :'Toshiba Man',
              depart:'Chemical',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (1).png"
            }

          ]
         
        },
        {
          id:4,
          name:'College of Medicine',
          department : [
            {
              id : 1,
              name :'Precious Samuel',
              depart:'Physiology',
              date:'04-19-22',
              'join-time':'8:13AM',
              'logout-time':'4:50',
              image:"Image here2 (1).png"
            },
            {
              id : 2,
              name :'Shasha Smith',
              depart:'Anatomy',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (1).png"
            },
            {
              id : 3,
              name :'Adebayo Babula',
              depart:'Biochemistry',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (1).png"
            },
            {
              id : 4,
              name :'Feranmi Feran',
              depart:'Nursing',
              date:'04-19-22',
              'join-time':'8:00AM',
              'logout-time':'4:00',
              image:"Image here2 (1).png"
            }

          ]
         
        }
      ]
  }
}
