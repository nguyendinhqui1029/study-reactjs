import * as Yup from "yup";

Yup.addMethod(Yup.string, "requiredCustome",function (errorMessage){
    return this.test("required-custome", errorMessage, function (value) {
      const { path, createError } = this;
      return value || createError({ path, message: errorMessage });
    });
});

export default Yup;
