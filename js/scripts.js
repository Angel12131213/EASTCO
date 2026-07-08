//==============================
// LOGIN
//==============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "jesus") {

            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "admin.html";

        } else {

            document.getElementById("message").innerHTML = "Invalid Username or Password";
            document.getElementById("message").style.color = "red";

        }

    });

}


//==============================
// PROTECT ADMIN PAGE
//==============================

if (window.location.pathname.endsWith("admin.html")) {

    if (localStorage.getItem("isLoggedIn") !== "true") {

        window.location.href = "login.html";

    }

}


//==============================
// LOGOUT
//==============================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("isLoggedIn");

    });

}

//==============================
// EVENTS CRUD
//==============================

const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

let events = JSON.parse(localStorage.getItem("events")) || [];
let editIndex = -1;

function displayEvents() {

    if (!eventList) return;

    eventList.innerHTML = "";

    events.forEach((event, index) => {

        eventList.innerHTML += `
            <div class="event-card">
                <h3>${event.title}</h3>

                <p><strong>Date:</strong> ${event.date}</p>

                <p>${event.description}</p>
<button onclick="editEvent(${index})">
    Edit
</button>

<button onclick="deleteEvent(${index})">
    Delete
</button>
                
            </div>
        `;

    });

}

if (eventForm) {

    eventForm.addEventListener("submit", function(e){

        e.preventDefault();

        const title = document.getElementById("eventTitle").value;

        const date = document.getElementById("eventDate").value;

        const description = document.getElementById("eventDescription").value;

  if (editIndex === -1) {

    events.push({

        title,
        date,
        description

    });

} else {

    events[editIndex] = {

        title,
        date,
        description

    };

    editIndex = -1;

}

        localStorage.setItem("events", JSON.stringify(events));

        eventForm.reset();

        displayEvents();

    });

}

function deleteEvent(index){

    events.splice(index,1);

    localStorage.setItem("events", JSON.stringify(events));

    displayEvents();

}

displayEvents();

//==============================
// ADMIN NAVIGATION
//==============================

const dashboardBtn = document.getElementById("dashboardBtn");
const eventsBtn = document.getElementById("eventsBtn");
const announcementBtn = document.getElementById("announcementBtn");

const dashboardSection = document.getElementById("dashboardSection");
const eventsSection = document.getElementById("eventsSection");
const announcementSection = document.getElementById("announcementSection");

if (dashboardBtn) {

    dashboardBtn.addEventListener("click", function(e){

        e.preventDefault();

        dashboardSection.style.display = "block";
        eventsSection.style.display = "none";
        announcementSection.style.display = "none";

    });

}

if (eventsBtn) {

    eventsBtn.addEventListener("click", function(e){

        e.preventDefault();

        dashboardSection.style.display = "none";
        eventsSection.style.display = "block";
        announcementSection.style.display = "none";

    });

}

if (announcementBtn) {

    announcementBtn.addEventListener("click", function(e){

        e.preventDefault();

        dashboardSection.style.display = "none";
        eventsSection.style.display = "none";
        announcementSection.style.display = "block";

    });

}

//==============================
// DISPLAY EVENTS ON WEBSITE
//==============================

const eventsContainer = document.getElementById("eventsContainer");

if (eventsContainer) {

    const events = JSON.parse(localStorage.getItem("events")) || [];

    eventsContainer.innerHTML = "";

    events.forEach(event => {

        eventsContainer.innerHTML += `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p>${event.description}</p>
            </div>
        `;

    });

}

function editEvent(index){

    document.getElementById("eventTitle").value =
    events[index].title;

    document.getElementById("eventDate").value =
    events[index].date;

    document.getElementById("eventDescription").value =
    events[index].description;

    editIndex = index;

}

//==============================
// ANNOUNCEMENTS CRUD
//==============================

const announcementForm = document.getElementById("announcementForm");
const announcementList = document.getElementById("announcementList");

let announcements =
JSON.parse(localStorage.getItem("announcements")) || [];

let editAnnouncementIndex = -1;

function displayAnnouncements(){

    if(!announcementList) return;

    announcementList.innerHTML="";

    announcements.forEach((announcement,index)=>{

        announcementList.innerHTML +=`

        <div class="event-card">

        <h3>${announcement.title}</h3>

        <p><strong>Date:</strong>
        ${announcement.date}</p>

        <p>${announcement.description}</p>

        <button onclick="editAnnouncement(${index})">

        Edit

        </button>

        <button onclick="deleteAnnouncement(${index})">

        Delete

        </button>

        </div>

        `;

    });

}

if(announcementForm){

announcementForm.addEventListener("submit",function(e){

e.preventDefault();

const title=document.getElementById("announcementTitle").value;

const date=document.getElementById("announcementDate").value;

const description=document.getElementById("announcementDescription").value;

if(editAnnouncementIndex===-1){

announcements.push({

title,
date,
description

});

}else{

announcements[editAnnouncementIndex]={

title,
date,
description

};

editAnnouncementIndex=-1;

}

localStorage.setItem(
"announcements",
JSON.stringify(announcements)
);

announcementForm.reset();

displayAnnouncements();

});

}

function editAnnouncement(index){

document.getElementById("announcementTitle").value=
announcements[index].title;

document.getElementById("announcementDate").value=
announcements[index].date;

document.getElementById("announcementDescription").value=
announcements[index].description;

editAnnouncementIndex=index;

}

function deleteAnnouncement(index){

announcements.splice(index,1);

localStorage.setItem(
"announcements",
JSON.stringify(announcements)
);

displayAnnouncements();

}

displayAnnouncements();

//==============================
// DISPLAY ANNOUNCEMENTS
//==============================

const announcementContainer =
document.getElementById("announcementContainer");

if(announcementContainer){

const announcements=
JSON.parse(
localStorage.getItem("announcements")
)||[];

announcementContainer.innerHTML="";

announcements.forEach(announcement=>{

announcementContainer.innerHTML+=`

<div class="announcement-card">

<h3>${announcement.title}</h3>

<p><strong>Date:</strong>
${announcement.date}</p>

<p>${announcement.description}</p>

</div>

`;

});

}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        document.getElementById("successMessage").style.display = "block";

        contactForm.reset();

    });

}