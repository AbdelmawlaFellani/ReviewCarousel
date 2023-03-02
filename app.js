const users = [
  {
    img_url: "https://avatars.githubusercontent.com/u/67197201?v=4",
    user_name: "Abdelmawla Fellani",
    user_role: "THE BOSS",
    user_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero molestiae sunt ipsum facilis amet id odio voluptatum hic consectetur. Recusandae earum eveniet quo accusantium error veniam, ab facilis animi!",
  },
  {
    img_url: "https://avatars.githubusercontent.com/u/124409654?v=4",
    user_name: "AbdeEssamad Gamraoui",
    user_role: "Intern",
    user_desc:
      "Reiciendis, autem. Doloremque veniam dignissimos quia perspiciatis laudantium error ea consequatur? Incidunt, aut, itaque ex dolorem iste doloribus cupiditate exercitationem iure, ipsam laudantium pariatur maxime nulla reprehenderit ducimus! Commodi, impedit.",
  },
  {
    img_url: "https://avatars.githubusercontent.com/u/71089834?v=4",
    user_name: "Maryem Khaoua",
    user_role: "Web Developer",
    user_desc:
      "Perspiciatis laudantium numquam perferendis eligendi libero quibusdam error ea consequatur? Incidunt, aut, itaque ex dolorem iste doloribus cupiditate exercitationem iure, ipsam laudantium pariatur maxime nulla reprehenderit ducimus! Commodi, impedit.",
  },
  {
    img_url: "https://avatars.githubusercontent.com/u/93763460?v=4",
    user_name: "Mohammed Chaaraoui",
    user_role: "Software Engineer",
    user_desc:
      "Laudantium error ea consequatur? Incidunt, aut, itaque ex dolorem iste doloribus cupiditate exercitationem iure, ipsam laudantium pariatur maxime nulla reprehenderit ducimus! Commodi, impedit.",
  },
  {
    img_url: "https://avatars.githubusercontent.com/u/23263374?v=4",
    user_name: "Amine Ben Reddad",
    user_role: "Web Designer",
    user_desc:
      "Omnis, eaque consequatur aliquam id error repellendus numquam perferendis eligendi libero quibusdam eveniet. Perspiciatis porro id sapiente itaque enim aliquam praesentium quod explicabo odio cum illo, reiciendis et libero ad.",
  },
];

const img = document.querySelector(".image");
const nam = document.querySelector(".name");
const role = document.querySelector(".role");
const desc = document.querySelector(".desc-section");
const next_btn = document.querySelectorAll("i")[1];
const prev_btn = document.querySelectorAll("i")[0];
const random_btn = document.querySelector(".surprise-btn");

var index = 0;

next_btn.addEventListener("click", function () {
  if (index === users.length-1) {
    index = -1;
  }
  index++;
  img.src = users[index].img_url;
  nam.innerHTML = users[index].user_name;
  role.innerHTML = users[index].user_role;
  desc.innerHTML = users[index].user_desc;
});
prev_btn.addEventListener("click", function () {
  if (index === 0) {
    index = users.length;
  }
  index--;
  img.src = users[index].img_url;
  nam.innerHTML = users[index].user_name;
  role.innerHTML = users[index].user_role;
  desc.innerHTML = users[index].user_desc;
});

random_btn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * users.length);
  img.src = users[randomIndex].img_url;
  nam.innerHTML = users[randomIndex].user_name;
  role.innerHTML = users[randomIndex].user_role;
  desc.innerHTML = users[randomIndex].user_desc;
});
