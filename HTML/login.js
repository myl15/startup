(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('userEmail');
    if(userName) {
        const nameEl = document.getElementById('userName')
        nameEl.value = userName;
        user = await getUserByEmail(nameEl.value);
        authenticated = user?.authenticated;

    }

    if (authenticated) {
        // Not sure what I need here
    }
})();

async function loginUser() {
    login(`/api/auth/login`);
    window.location.href = "travel.html";
}

async function createUser() {
    create(`/api/auth/create`);
}

async function create(endpoint) {
    const userName = document.getElementById('newuserName')?.value;
    const password = document.querySelector('#newuserPassword')?.value;
    const userEmail = document.querySelector('#userEmail')?.value;
    const firstName = document.querySelector('#firstName')?.value;
    const lastName = document.querySelector('#lastName')?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userEmail, password: password, firstName: firstName, lastName: lastName, userName: userName }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const body = await response.json();

    if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        window.location.href = 'travel.html';
    } else {
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
        msgModal.show();
    }
}

async function login(endpoint) {
    const userName = document.getElementById('userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const userEmail = document.querySelector('#userName')?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userEmail, password: password, userName: userName }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const body = await response.json();

    if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        window.location.href = 'travel.html';
    } else {
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
        msgModal.show();
    }
}

function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }

  async function getUserByEmail(email) {
    
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }