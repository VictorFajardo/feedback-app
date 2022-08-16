export interface ReviewInterface {
  id: string,
  createdAt: string,
  employeeName: string,
  employeeJobTitle: string,
  employeeEmail: string,
  reviewerName: string,
  reviewerJobTitle: string,
  reviewerEmail: string,
  content: string,
  completed: boolean,
}

export interface EmployeeInterface {
  id: string,
  createdAt: string,
  firstName: string,
  lastName: string,
  jobTitle: string,
  email: string,
  password: string,
}

export interface UserInterface {
  id: string,
  createdAt: string,
  firstName: string,
  lastName: string,
  jobTitle: string,
  email: string,
  admin: boolean,
  reviews: string[],
}