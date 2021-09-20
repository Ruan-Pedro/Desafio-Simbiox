export interface ApiModel {
  full_price:any,
  enabled:any,
  campus:Campus[] | any,
  university: University[] | any,
  course: Course[] | any
}

export interface Course {
  name:string,
}
export interface University  {
  logo_url:string,
}
export interface Campus {
  city:string,
}