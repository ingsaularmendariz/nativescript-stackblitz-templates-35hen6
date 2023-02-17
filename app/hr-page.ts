import { Observable, Page } from "@nativescript/core";
import { Employee } from "./hr-view-model";

export function pageLoaded(args) {
  const page = <Page>args.object;
  page.bindingContext = new HRViewModel();
}

class HRViewModel extends Observable {
  employees: Array<Employee>;

  constructor() {
    super();
    this.employees = [
      new Employee("Juan", "Gerente de Ventas", 10000),
      new Employee("María", "Especialista en Marketing", 8000),
      new Employee("Luis", "Ingeniero de Software", 12000)
    ];
  }

  saveEmployee() {
    const page = <Page>this.page;

    const nameTextField = <TextField>page.getViewById("name");
    const positionTextField = <TextField>page.getViewById("position");
    const salaryTextField = <TextField>page.getViewById("salary");

    const name = nameTextField.text;
    const position = positionTextField.text;
    const salary = parseInt(salaryTextField.text);

    if (name && position && salary) {
      const employee = new Employee(name, position, salary);
      this.employees.push(employee);

      nameTextField.text = "";
      positionTextField.text = "";
      salaryTextField.text = "";

      alert("Empleado guardado exitosamente");
    } else {
      alert("Por favor, completa todos los campos");
    }
  }
}

