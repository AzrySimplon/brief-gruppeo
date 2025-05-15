import {resolveSrv} from 'node:dns';

export {};

declare global {

  enum Gender {
    Man,
    Woman,
    NonBinary
  }

  enum Profile {
    shy,
    reserved,
    at_ease
  }

  interface List {
    id: number;
    name: string;
    nbr_persons: number;
  }

  interface Group {
    id: number;
    name: string;
    nbr_persons: number;
  }

  interface Person {
    id: number;
    name: string;
    gender: Gender;
    french_knowledge: number;
    old_dwwn: boolean;
    technical_knowledge: number;
    profile: Profile;
    age: number;
  }
}
