import data from "./data.js";

let template = document.querySelector(".job__template");
let ulGlobalList = document.querySelector(".job__list");

let headerDiv = document.querySelector(".div");
let headerList = document.querySelector(".job__link__list");
let allClear = document.querySelector(".job__clear");

function headerBtn(a) {
  headerDiv.classList.add("job__link__lang");
  let headerItem = document.createElement("button");
  headerItem.classList.add("job__lang__header");
  headerItem.textContent = a;
  headerList.appendChild(headerItem);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("job__btn__delete");
  headerItem.appendChild(deleteBtn);
  allClear.textContent = "Clear";
  allClear.addEventListener("click", () => {
    headerItem.remove();
    headerDiv.setAttribute("class", "div");
  });
  deleteBtn.addEventListener("click", () => {
    headerItem.remove();
    if (headerList.children.length == 0) {
      headerDiv.setAttribute("class", "div");
    }
  });
}
data.forEach((item) => {
  let li = template.content.cloneNode(true);

  let {
    id,
    company,
    position,
    postedAt,
    tools,
    location,
    languages,
    level,
    logo,
    role,
    contract,
    featured,
  } = item;
  let img = li.querySelector(".job__img");
  let compan = li.querySelector(".job__company");
  let title = li.querySelector(".job__title");
  let posted = li.querySelector(".job__post");
  let employet = li.querySelector(".job__employment");
  let police = li.querySelector(".job__location");
  let jobRole = li.querySelector(".job__role");
  let jobLvel = li.querySelector(".job__level");
  let jobLanguages = li.querySelector(".job__languages");
  let jobTool = li.querySelector(".job__tools");
  let jobDiv = li.querySelector(".job__best");

  img.src = logo;
  employet.textContent = contract;
  posted.textContent = postedAt;
  title.textContent = position;
  compan.textContent = company;
  police.textContent = location;
  jobRole.textContent = role;
  jobLvel.textContent = level;

  jobRole.addEventListener("click", () => {
    headerBtn(role);
  });

  jobLvel.addEventListener("click", () => {
    headerBtn(level);
  });

  languages.forEach((lang) => {
    let newLangJob = document.createElement("button");
    newLangJob.classList.add("job__lang");
    newLangJob.textContent = lang;
    jobLanguages.appendChild(newLangJob);
    newLangJob.addEventListener("click", () => {
      headerBtn(lang);
    });
  });

  tools.forEach((tool) => {
    let newToolJob = document.createElement("button");
    newToolJob.classList.add("job__tol");
    newToolJob.textContent = tool;
    jobTool.appendChild(newToolJob);
    newToolJob.addEventListener("click", () => {
      headerBtn(tool);
    });
  });

  if (item.new) {
    let newSpan = document.createElement("span");
    newSpan.classList.add("job__new");
    newSpan.textContent = "NEW!";
    compan.appendChild(newSpan);
  }

  if (featured) {
    let newSpan = document.createElement("span");
    newSpan.classList.add("job__featured");
    newSpan.textContent = "FEATURED";
    compan.appendChild(newSpan);
  }
  if (featured && item.new) {
    jobDiv.classList.add("job__div");
  }

  ulGlobalList.appendChild(li);
});
