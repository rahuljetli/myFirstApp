import { EmployeeListModule } from './employee-list.module';

describe('EmployeeListModule', () => {
  let employeeListModule: EmployeeListModule;

  beforeEach(() => {
    employeeListModule = new EmployeeListModule();
  });

  it('should create an instance', () => {
    expect(employeeListModule).toBeTruthy();
  });
});
