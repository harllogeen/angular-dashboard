interface dept {
    id : number,
    name :string,
    depart:string,
    date:string,
    'join-time':string,
    'logout-time':string,
    image:string

}
export interface facultylist{
    id:number,
    name:string,
    department: dept []
}