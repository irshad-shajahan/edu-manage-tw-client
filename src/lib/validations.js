export function validatePassword(password) {
    const errors = [];
  
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      errors.push("Password should be at least 8 characters long");
    }
  
    // Check if the password contains at least 1 digit
    if (!/\d/.test(password)) {
      errors.push("Password should contain at least 1 digit");
    }
  
    // Check if the password contains at least 1 special character (you can modify this part)
    if (!/[!@#$%^&*()_+]/.test(password)) {
      errors.push("Password should contain at least 1 special character");
    }
  
    // Return the array of error messages
    return errors.length === 0 ? "Valid password" : errors;
  }
  export function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Trim the email to remove any leading or trailing whitespace
    const trimmedEmail = email.trim();
    
    if (trimmedEmail.length === 0) {
      return "Email is required";
    }
    
    if (!emailRegex.test(trimmedEmail)) {
      return "Invalid email format";
    }
    
    // Additional checks (optional)
    if (trimmedEmail.length > 254) {
      return "Email is too long";
    }
    
    const [localPart, domain] = trimmedEmail.split('@');
    if (localPart.length > 64) {
      return "Local part of email is too long";
    }
    
    if (domain.length > 255) {
      return "Domain part of email is too long";
    }
    
    return "Valid email";
  }