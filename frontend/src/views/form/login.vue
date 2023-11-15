<template>
    <div class="formbold-main-wrapper" style="font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto;">
      <div class="formbold-form-wrapper" style="background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);">
        <form action="/login" method="POST">

          <div class="formbold-form-title" style="text-align: center; margin-bottom: 20px;">
          <img src="../../../public/img/icons/minsu.jpg" alt="Logo" style="max-width: 100px; margin-bottom: 10px;">
        </div>
          
          <div class="formbold-form-title" style="text-align: center; margin-bottom: 20px;">
            <h2 style="font-size: 24px; color: lightgreen;">Login</h2>
          </div>
          
          <div class="formbold-input-flex" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <div style="flex: 1; margin-right: 10px;">
              <label for="lastname" class="formbold-form-label" style="font-weight: bold; color: darkgreen;">Last name</label>
              <input type="text" name="lastName" id="lastName" class="formbold-form-input" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px;">
            </div>
            <div style="flex: 1; margin-right: 10px;">
              <label for="firstname" class="formbold-form-label" style="font-weight: bold; color: darkgreen;">First name</label>
              <input type="text" name="firstname" id="firstname" class="formbold-form-input" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px;">
            </div>
            <div style="flex: 1;">
              <label for="middlename" class="formbold-form-label" style="font-weight: bold; color: darkgreen;">Middle name</label>
              <input type="text" name="middleName" id="middleName" class="formbold-form-input" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px;">
            </div>
          </div>
          
          <div class="formbold-input-flex" style="display: flex; justify-content: space-between; margin-bottom: 15px;">
            <div style="flex: 1; margin-right: 10px;">
              <label for="idNumber" class="formbold-form-label" style="font-weight: bold; color: darkgreen;">ID number</label>
              <input type="text" name="idNumber" id="idNumber" class="formbold-form-input" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px;">
            </div>
          </div>
          
          <div class="formbold-input-flex" style="display: flex; justify-content: space-between; margin-bottom: 15px;">
            <div style="flex: 1;">
              <label for="schoolName" class="formbold-form-label" style="font-weight: bold; color: darkgreen;">School Name</label>
              <input type="text" name="schoolName" id="schoolName" class="formbold-form-input" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px;">
            </div>
          </div>
          
          <div class="formbold-checkbox-wrapper" style="margin-bottom: 15px;">
            <label for="supportCheckbox" class="formbold-checkbox-label" style="display: flex; align-items: center; font-size: 14px; color: darkgreen;">
              <input type="checkbox" id="supportCheckbox" class="formbold-input-checkbox" style="margin-right: 10px;">
              I agree to the defined <a href="#" style="color: lightgreen; text-decoration: none;"> terms, conditions, and policies</a>
            </label>
          </div>
          
          <button class="formbold-btn" style="background-color: lightgreen; color: #fff; border: none; padding: 10px 20px; font-size: 16px; border-radius: 5px; cursor: pointer;">Login</button>
        </form>
      </div>
    </div>
  </template>