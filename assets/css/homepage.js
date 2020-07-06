var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();

console.log(response.location);
console.log(response.followers);