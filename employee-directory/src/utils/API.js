import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomUser API

export default {
getEmployees: function() {
    return axios.get("http://localhost:3002/api/?results=200&nat=us");
    }
};