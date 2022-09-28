// Initilize GitHub Class
const github = new GitHub;

// Initialise UI Class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
  // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show Not Found alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repo);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});