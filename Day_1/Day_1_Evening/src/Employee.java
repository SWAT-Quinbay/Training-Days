import java.util.Date;

public class Employee {

    private String employee_id;
    private String first_name;
    private String last_name;
    private String phone;
    private String email;
    private String designation;
    private double salary;
    private float rating;
    private double DOB;

    @Override
    public String toString() {
        return "Employee{" +
                "employee_id='" + employee_id + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", designation='" + designation + '\'' +
                ", salary=" + salary +
                ", rating=" + rating +
                ", DOB=" + DOB +
                '}';
    }

    public Employee(String employee_id, String first_name, String last_name, String phone, String email, String designation, double salary, float rating, double DOB){
        this.employee_id = employee_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.email = email;
        this.designation = designation;
        this.salary = salary;
        this.rating = rating;
        this.DOB = DOB;

    }


}
