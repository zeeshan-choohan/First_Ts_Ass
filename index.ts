interface User {
    id: number;
    name: string;
    email: string;
  };
  let apiFetch = async  function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  };
 let getTable = function generateTable(users: User[]): string {
    let html = '<table>';
    html += '<thead><tr><th>ID</th><th>Name</th><th>Email</th></tr></thead>';
    html += '<tbody>';
    users.forEach(user => {
      html += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
    });
    html += '</tbody>';
    html += '</table>';
    return html;
  };

  apiFetch().then(users => {
    const tableHtml = getTable(users);
    const tableElement = document.getElementById('user-table');
    if (tableElement) {
      tableElement.innerHTML = tableHtml;
    }
  });