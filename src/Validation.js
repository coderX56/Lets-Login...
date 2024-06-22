export default function Validation(formData) {
    const errors = {};
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
     

    if(formData.name ===""){
      errors.name="*Name is required"};
    
    if (formData.email === "") {
      errors.email = "*Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "*Email is invalid";
    }
  
    if (formData.password === "") {
      errors.password = "*Password is required";
    } else if (!passwordPattern.test(formData.password)) {
      errors.password = "*Password is invalid";
    }
    if(formData.password!==formData.cpassword){
      errors.cpassword="*Passwword do not match";
    }
  
    return errors;
  }
  