export const validation = {};
validation.emailvalidation = (email) => {
  let emailRegex = /^\S+@\S+\.\S+$/;
  if (emailRegex.test(email)) return false;
  else return true;
};

validation.noOfQuestionsvalidation = (noq) => {
  if (noq > 0) return false;
  else return true;
};

validation.namevalidation = (name) => {
  if (name.length <= 2) return true;
  else return;
};
