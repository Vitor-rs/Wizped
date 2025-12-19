import type { User, NewUser, Student, NewStudent } from '@main/database/schema'

export interface IpcEvents {
  'users:getAll': {
    request: []
    response: User[]
  }
  'users:getById': {
    request: [id: string]
    response: User | null
  }
  'users:create': {
    request: [data: NewUser]
    response: User
  }
  'users:update': {
    request: [id: string, data: Partial<NewUser>]
    response: User
  }
  'users:delete': {
    request: [id: string]
    response: boolean
  }
  'estudantes:getAll': {
    request: []
    response: Student[]
  }
  'estudantes:getById': {
    request: [id: string]
    response: Student | null
  }
  'estudantes:create': {
    request: [data: NewStudent]
    response: Student
  }
  'estudantes:update': {
    request: [id: string, data: Partial<NewStudent>]
    response: Student
  }
  'estudantes:delete': {
    request: [id: string]
    response: boolean
  }
}
