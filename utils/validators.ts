// Function to validate the username input
export const validateUsername = (username: string) => {
    // Check if the username is empty after trimming whitespace
    if (username.trim() === '') {
      return 'Username is required';
    }
    return ''; // Return an empty string if the username is valid
  };
  
  // Function to validate the password input
  export const validatePassword = (password: string) => {
    // Check if the password is empty after trimming whitespace
    if (password.trim() === '') {
      return 'Password is required';
    }
    return ''; // Return an empty string if the password is valid
  };
  
  // Function to validate both username and password inputs
  export const validateForm = (username: string, password: string) => {
    // Create an object with errors from validating both fields
    const errors = {
      username: validateUsername(username),
      password: validatePassword(password),
    };
    return errors; // Return the errors object
  };
  