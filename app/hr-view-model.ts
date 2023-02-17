import { Observable } from "@nativescript/core";

export class Employee extends Observable {
  name: string;
  position: string;
  salary: number;

  constructor(name: string, position: string, salary: number) {
    super();

    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

