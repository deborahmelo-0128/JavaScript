// ===== CACHE =====
let cachePosts = JSON.parse(localStorage.getItem("posts") || "[]");
let users = JSON.parse(localStorage.getItem("users") || "{}");
let currentUser = localStorage.getItem("currentUser");

// ===== ELEMENTS =====
const feed = document.getElementById("feed");
const loginSection = document.getElementById("loginSection");
const profileSection = document.getElementById("profileSection");
const postForm = document.getElementById("postForm");
const profileAvatar = document.getElementById("profileAvatar");

// ===== INIT =====
if (currentUser) {
  showApp();
  renderFeed();
}

// ===== LOGIN =====
function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) return;

  currentUser = username;
  localStorage.setItem("currentUser", currentUser);

  if (!users[username]) {
    users[username] = { avatar: "" };
    saveUsers();
  }

  showApp();
  renderFeed();
}

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("currentUser");
  location.reload();
}

// ===== SHOW APP =====
function showApp() {
  loginSection.classList.add("hidden");
  profileSection.classList.remove("hidden");
  postForm.classList.remove("hidden");

  profileAvatar.src =
    users[currentUser].avatar || "https://via.placeholder.com/80";
}

// ===== AVATAR =====
function uploadAvatar() {
  const input = document.getElementById("avatarInput");
  if (!input.files[0]) return;

  const reader = new FileReader();
  reader.onload = e => {
    users[currentUser].avatar = e.target.result;
    saveUsers();
    showApp();
    renderFeed();
  };
  reader.readAsDataURL(input.files[0]);
}

// ===== POSTS =====
function addPost() {
  const text = document.getElementById("postText").value.trim();
  if (!text) return;

  const imageInput = document.getElementById("imageInput");

  const post = {
    id: Date.now(),
    user: currentUser,
    text,
    image: "",
    likes: 0,
    reposts: 0,
    time: Date.now()
  };

  if (imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      post.image = e.target.result;
      cachePosts.push(post);
      savePosts();
      renderFeed();
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    cachePosts.push(post);
    savePosts();
    renderFeed();
  }

  document.getElementById("postText").value = "";
  imageInput.value = "";
}

// ===== FEED =====
function renderFeed() {
  feed.innerHTML = "";

  cachePosts
    .sort((a, b) => (b.likes + b.reposts * 2) - (a.likes + a.reposts * 2) || b.time - a.time)
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `
        <img class="avatar" src="${users[p.user]?.avatar || "https://via.placeholder.com/48"}" />
        <div>
          <strong>@${p.user}</strong> · ${timeAgo(p.time)}
          <p>${p.text}</p>
          ${p.image ? `<img class="post-img" src="${p.image}" />` : ""}
          <div class="actions">
            <span onclick="likePost(${p.id})">❤️ ${p.likes}</span>
            <span onclick="repostPost(${p.id})">🔁 ${p.reposts}</span>
            ${p.user === currentUser ? `<span onclick="deletePost(${p.id})">🗑️</span>` : ""}
          </div>
        </div>
      `;

      feed.appendChild(div);
    });
}

// ===== ACTIONS =====
function likePost(id) {
  const post = cachePosts.find(p => p.id === id);
  post.likes++;
  savePosts();
  renderFeed();
}

function repostPost(id) {
  const original = cachePosts.find(p => p.id === id);
  original.reposts++;
  cachePosts.push({ ...original, id: Date.now(), time: Date.now() });
  savePosts();
  renderFeed();
}

function deletePost(id) {
  cachePosts = cachePosts.filter(p => p.id !== id);
  savePosts();
  renderFeed();
}

// ===== UTILS =====
function timeAgo(time) {
  const s = Math.floor((Date.now() - time) / 1000);
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}min`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  return `${Math.floor(s / 86400)}d`;
}

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(cachePosts));
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}
