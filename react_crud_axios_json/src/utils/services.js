import axios from "axios";
export const postdata = (data) => {
  const url = "http://localhost:4000/contacts";
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => {
        if (response.data.id != 0) resolve("ok");
        else reject("error😢😢😢😢");
      })
      .catch((error) => {
        console.log(error);

        reject("some error occured😢😢😢😢");
      });
  });
};

export const getdata = () => {
  const url = "http://localhost:4000/contacts";
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        if (response.data.length > 0) resolve(response.data);
        else reject("No data found!!! ");
      })
      .catch((error) => {
        console.log(error);

        reject("Some Error Occured Not able to fetch the data😢😢😢😢");
      });
  });
};

export const deletedata = (id) => {
  const url = `http://localhost:4000/contacts/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then((response) => {
        if (response.statusText === "OK") resolve("OK");
        else reject("Not Able to Delete 😢😢😢😢");
      })
      .catch((error) => {
        reject("Runtime Error!!😢😢😢😢");
      });
  });
};

export const getDataById = (id) => {
  const url = `http://localhost:4000/contacts/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject("Some Error Occured Not able to fetch the data😢😢😢😢");
      });
  });
};

export const updateData = (fileds = {}, id) => {
  const url = `http://localhost:4000/contacts/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .put(url, fileds)
      .then((response) => {
        resolve("Data Updated Successfully!!!😍😍😍");
      })
      .catch((error) => {
        console.log(error);
        reject("Some Error Occured Not able to update😢😢😢😢");
      });
  });
};
