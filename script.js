// Sample Faculty Data
const facultyData = [
  { name: "Dr. Mahesh", dept: "CSE", cabin: "A-203", email: "mahesh@rgmcet.edu" },
  { name: "Ms. Priya", dept: "ECE", cabin: "B-112", email: "priya@rgmcet.edu" },
  { name: "Mr. Ramesh", dept: "EEE", cabin: "C-108", email: "ramesh@rgmcet.edu" },
  { name: "Dr. Kavitha", dept: "CSE", cabin: "A-305", email: "kavitha@rgmcet.edu" },
  { name: "Mr. Sunil", dept: "MECH", cabin: "D-210", email: "sunil@rgmcet.edu" },
];

// Function to display faculty
function displayFaculty(list) {
  const container = document.getElementById("facultyList");
  container.innerHTML = "";

  list.forEach((f) => {
    const card = `
      <div class="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h2 class="text-xl font-semibold">${f.name}</h2>
        <p class="text-gray-600">Department: ${f.dept}</p>
        <p class="text-gray-600">Cabin: ${f.cabin}</p>
        <p class="text-gray-600">Email: ${f.email}</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Search & Filter Function
function searchFaculty() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const dept = document.getElementById("deptFilter").value;

  const filtered = facultyData.filter((f) => {
    const matchesName = f.name.toLowerCase().includes(query);
    const matchesDept = dept === "" || f.dept === dept;
    return matchesName && matchesDept;
  });

  displayFaculty(filtered);
}

// Load all on start
displayFaculty(facultyData);
