export const validateUsername = (username: string) => {
    if (username.trim() === '') {
      return 'Username is required';
    }
    return '';
  };
  
  export const validatePassword = (password: string) => {
    if (password.trim() === '') {
      return 'Password is required';
    }
    return '';
  };
  
  export const validateForm = (username: string, password: string) => {
    const errors = {
      username: validateUsername(username),
      password: validatePassword(password),
    };
    return errors;
  };
  