import React from "react";

function addtolocal(name, key, value) {
  // Check if name key avaailable in local storage
  if (localStorage.getItem(name)) {
    //first get data from name key : must convert it into string
    let old = JSON.parse(localStorage.getItem(name));
    old[key] = value;
    localStorage.setItem(name, JSON.stringify(old));
  } else {
    let m = {}; // create empty object
    m[key] = value;
    localStorage.setItem(name, JSON.stringify(m));
  }
}

function add(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();
  // Read the form data
  const form = e.target;
  //const formData = new FormData(form);
  //const formJson = Object.fromEntries(formData.entries());
  addtolocal("userInfo", form.name.value, form.pass.value);
  document.getElementById("p1").innerText = localStorage.getItem("userInfo");
}

export default function LocalStorage() {
  return (
    <div>
      <form onSubmit={add}>
        <input type="text" name="name" />
        <input type="password" name="pass" />
        <button type="submit">Add</button>
      </form>
      <p id="p1"></p>
    </div>
  );
}
