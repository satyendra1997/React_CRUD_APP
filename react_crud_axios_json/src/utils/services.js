import axios from "axios";
export const postdata = (data) => {
  const url = "http://localhost:4000/contacts";
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => {
        if (response.data.id != 0) resolve("ok");
        else reject("errorπ’π’π’π’");
      })
      .catch((error) => {
        console.log(error);

        reject("some error occuredπ’π’π’π’");
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

        reject("Some Error Occured Not able to fetch the dataπ’π’π’π’");
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
        else reject("Not Able to Delete π’π’π’π’");
      })
      .catch((error) => {
        reject("Runtime Error!!π’π’π’π’");
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
        reject("Some Error Occured Not able to fetch the dataπ’π’π’π’");
      });
  });
};

export const updateData = (fileds = {}, id) => {
  const url = `http://localhost:4000/contacts/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .put(url, fileds)
      .then((response) => {
        resolve("Data Updated Successfully!!!πππ");
      })
      .catch((error) => {
        console.log(error);
        reject("Some Error Occured Not able to updateπ’π’π’π’");
      });
  });
};
