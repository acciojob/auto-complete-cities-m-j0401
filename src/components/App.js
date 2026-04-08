
import React from "react";
import './../styles/App.css';
import Cities from "./Cities";

const city = [
  "Mumbai","Delhi","Bengaluru","Hyderabad","Ahmedabad","Chennai","Kolkata","Pune","Jaipur","Lucknow",
  "Kanpur","Nagpur","Indore","Thane","Bhopal","Visakhapatnam","Patna","Vadodara","Ghaziabad","Ludhiana",
  "Agra","Nashik","Faridabad","Meerut","Rajkot","Kalyan","Vasai","Varanasi","Srinagar","Aurangabad",
  "Dhanbad","Amritsar","Navi Mumbai","Allahabad","Ranchi","Howrah","Coimbatore","Jabalpur","Gwalior","Vijayawada",
  "Jodhpur","Madurai","Raipur","Kota","Guwahati","Chandigarh","Solapur","Hubli","Mysuru","Tiruchirappalli",
  "Bareilly","Aligarh","Tiruppur","Gurgaon","Moradabad","Jalandhar","Bhubaneswar","Salem","Warangal","Guntur",
  "Bhiwandi","Saharanpur","Gorakhpur","Bikaner","Amravati","Noida","Jamshedpur","Bhilai","Cuttack","Firozabad",
  "Kochi","Bhavnagar","Dehradun","Durgapur","Asansol","Nanded","Kolhapur","Ajmer","Gulbarga","Jamnagar",
  "Ujjain","Loni","Siliguri","Jhansi","Ulhasnagar","Nellore","Jammu","Sangli","Belgaum","Mangalore",
  "Ambattur","Tirunelveli","Malegaon","Gaya","Jalgaon","Udaipur","Maheshtala","Davanagere","Kozhikode","Kurnool",
  "Rajpur","Bokaro","South Dumdum","Bellary","Patiala","Gopalpur","Agartala","Bhagalpur","Muzaffarnagar","Bhatpara",
  "Panihati","Latur","Dhule","Rohtak","Korba","Bhilwara","Berhampur","Muzaffarpur","Ahmednagar","Mathura",
  "Kollam","Avadi","Kadapa","Anantapur","Kamarhati","Sambalpur","Bilaspur","Shahjahanpur","Satara","Bijapur",
  "Rampur","Shivamogga","Chandrapur","Junagadh","Thrissur","Alwar","Bardhaman","Kulti","Kakinada","Nizamabad",
  "Parbhani","Tumkur","Khammam","Ozhukarai","Bihar Sharif","Panipat","Darbhanga","Bally","Aizawl","Dewas",
  "Ichalkaranji","Karnal","Bathinda","Jalna","Eluru","Barasat","Kirari Suleman Nagar","Purnia","Satna","Mau",
  "Sonipat","Farrukhabad","Sagar","Rourkela","Durg","Imphal","Ratlam","Hapur","Arrah","Karimnagar",
  "Anand","Etawah","Ambernath","North Dumdum","Bharatpur","Begusarai","New Delhi","Gandhidham","Baranagar","Tiruvottiyur",
  "Puducherry","Sikar","Thoothukudi","Rewa","Mirzapur","Raichur","Pali","Ramagundam","Silchar","Haridwar",
  "Vijayanagaram","Tenali","Nagercoil","Sri Ganganagar","Karawal Nagar","Mango","Thanjavur","Bulandshahr","Uluberia","Katihar"
];



const App = () => {
  return (
    <div>
        <Cities suggestions={city}/>
    </div>
  )
}

export default App
