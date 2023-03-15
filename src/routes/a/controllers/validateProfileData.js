import {
    genders,
    occupations,
    countries,
  } from "./profileDataLists.js";


export const validateFullName = (fullName) => {
    const fullNameRegex = /^[a-zA-Z.\s]+$/;
    return (typeof fullName === "string" && fullNameRegex.test(fullName));
}

export const validateAge  = (age) => {
    const ageRegex = /^(?!00)\d{2}$/
    return ageRegex.test(age);
}

export const validateGender = (gender) => {
    return genders.includes(gender);
}

export const validateCountry = (country) => {
    return countries.includes(country);
}
export const validateOccupation = (occupation) => {
    return occupations.includes(occupation);
}