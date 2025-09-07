const users = [
  {
    name: "Sheraz Ahmad",
    pic: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Django backend developer and Python enthusiast."
  },
  {
    name: "Ayesha Khan",
    pic: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Frontend developer specializing in React and Next.js."
  },
  {
    name: "Bilal Iqbal",
    pic: "https://randomuser.me/api/portraits/men/76.jpg",
    bio: "Full stack developer with focus on MERN stack."
  },
  {
    name: "Fatima Noor",
    pic: "https://randomuser.me/api/portraits/women/25.jpg",
    bio: "UI/UX designer passionate about user experience."
  },
  {
    name: "Ali Raza",
    pic: "https://randomuser.me/api/portraits/men/14.jpg",
    bio: "Mobile app developer building Flutter apps."
  }
];
// Get elements
const userList = document.getElementById("user-list");
const searchInput = document.getElementById("search");

// Function to render users
function displayUsers(userArray) {
  userList.innerHTML = ""; // clear previous
  userArray.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
      <img src="${user.pic}" alt="${user.name}">
      <h3>${user.name}</h3>
      <p>${user.bio}</p>
    `;
    userList.appendChild(card);
  });
}

// Show all users on load
displayUsers(users);

// Add search filter
searchInput.addEventListener("input", e => {
  const searchValue = e.target.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(searchValue) ||
    user.bio.toLowerCase().includes(searchValue)
  );
  displayUsers(filtered);
});
