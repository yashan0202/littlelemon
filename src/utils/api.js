<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>

// Mock implementation of fetchAPI
export function fetchAPI(date) {
    // Replace this with the actual implementation
    const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    return availableTimes; // Example: return available times for a given date
  }
  
  // Mock implementation of submitAPI
  export function submitAPI(formData) {
    console.log("Submitting form data:", formData);
    return true; // Example: return true to indicate successful submission
  }
  
