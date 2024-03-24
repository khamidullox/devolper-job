import data from "./data.js";

let template = document.querySelector(".job__template");
let ulGlobalList = document.querySelector(".job__list");
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

  languages.forEach((lang) => {
    let newLangJob = document.createElement("button");
    newLangJob.classList.add("job__lang");
    newLangJob.textContent = lang;
    jobLanguages.appendChild(newLangJob);
  });
  tools.forEach((tool) => {
    let newToolJob = document.createElement("button");
    newToolJob.classList.add("job__tol");
    newToolJob.textContent = tool;
    jobTool.appendChild(newToolJob);
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
