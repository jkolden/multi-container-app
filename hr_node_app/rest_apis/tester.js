const hcm = require("./hcm.js");

let feed = hcm
  .getEmployees({
    loginDetails: {
      instance: "adc4-zhox",
      password: "aPb35488",
      user: "betty.anderson"
    },
    lastName: "Williamson"
  })
  .then(response => console.log(response));
