async function fetchUserData(){
  //The API URL
    const apiUrl ='https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data')
try{
   // Fetch data using await
  const response = await fetch(apiUrl);
  const users = await response.json();

  
dataContainer.innerHTML = ''  // Clear the loading message
// Create a <ul> element to hold the user list
const userList = document.createElement('ul');
// Loop through the users array
users.forEach(user => {
   // Create a <li> element for each user
  const list = document.createElement('li');

   // Set the text content to the user's name
  list.textContent = user.name;
   // Append the <li> to userList
  userList.appendChild(list);
});
 // Append the userList to dataContainer
dataContainer.appendChild(userList);
}catch(error){
  // Clear existing content and set an error message
  dataContainer.innerHTML = '';
  dataContainer.textContent = 'Failed to load user data.';
  console.error('Error fetching data:', error);
}
}
// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData());