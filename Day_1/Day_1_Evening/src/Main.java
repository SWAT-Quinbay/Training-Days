import java.io.*;
import java.lang.*;
import java.util.*;
import java.util.UUID;

public class Main {

    public static void main(String[] args) {
        try{

            FileReader reader = new FileReader("/Users/vigneshr/Desktop/Quinbay_Training/Day_1/Day_1_Evening/src/data.txt");

            BufferedReader br = new BufferedReader(reader);

            HashMap<String,Employee> map = new HashMap<String,Employee>();



            String data =null;

            Employee employees[] = new Employee[10];

            while ((data = br.readLine()) != null)
            {

//                String first_name;
//                String last_name;
//                String phone;
//                String email;
//                String designation;
//                double salary;
//                float rating;
//                double DOB;

                String[] res = data.split("[,]", 0);

                UUID uuid = UUID.randomUUID();
                String uni = uuid.toString();

                for(String myStr: res) {
                    if(res[1].length() > 3){
                        if(res[1].substring(0,2) == "Mr.") {
                            res[1].replace("Mr.","");
                        }else if(res[1].substring(0,3) == "Mrs."){
                            res[1].replace("Mrs.","");
                        }
                    }



                    map.put(res[2],(new Employee(uni, res[0],res[1],res[2],res[3],res[4],Double.parseDouble(res[5]),Float.parseFloat(res[6]),Double.parseDouble(res[7]))));
                }


            }

            for(Map.Entry m : map.entrySet()){
                System.out.println(m.getKey()+" "+m.getValue());
            }



            br.close();


        }catch(Exception err){
            System.out.println(err);
        }


    }
}
