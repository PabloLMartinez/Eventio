"use strict";

const errorList = {
  SERVICE_400: "Service not currently available. Please retry later."
};

export function errorMessage(error) {
  if (error.response){
    if (error.response.data){
      if (error.response.data.error){
        if (error.response.data.error.error){
          return error.response.data.error.error;
        } else {
          return errorList.SERVICE_400;
        }
      } else if (error.response.data.message){
        return error.response.data.message;
      } else {
        return JSON.stringify(error.response.data);
      }
    } else if (error.response.statusText){
      return error.response.statusText;
    } else {
      return JSON.stringify(error.response);
    }
  } else if (error.message){
    return error.message;
  } else {
    return JSON.stringify(error);
  }

  return "Unknown API error";
}
