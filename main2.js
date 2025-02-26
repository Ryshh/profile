const user= { name: "Kiss Éva", age: 28, email: "eva@example.com", avatar: "https://i.pravatar.cc/250?img=1",role:"Frontend fejlesztő" }

const names = user.name.split(" ") 
const firstName = names[1]
const lastName = names[0]

function renderProfile()
{
    document.querySelector(".card-container").innerHTML += `
    <div class="card">
        <div class="profile-bg">
            <img class="kep" src="${user.avatar}">
        </div>
        <div class="profile-inf">
            <h2>${user.name}</h2>
            <p class="email">${user.email}</p>
            <p class="job">${user.role}</p>
            <button class="szerkeszt" popovertarget="mypopover">Profil szerkesztése</button>
            <div class="popoverContent" id="mypopover" popover>
                <div class="vertical">
                    <div class="horizontal">
                        <div class="popoverImgBg">
                            <img class="popoverImage" src="${user.avatar}">
                        </div>
                        <div class="popoverButton">
                            <button class="changeButton">Change picture</button>
                            <button class="deleteButton">Delete picture</button>
                        </div>
                    </div>
                    <div class="inputInfo">
                        <p>Your first name</p>
                        <input type="text" value="${firstName}">
                        <p>Your last name</p>
                        <input type="text" value="${lastName}">
                        <p>Your email</p>
                        <input type="email" value="${user.email}">
                        <p>Profession</p>
                        <input type="text" value="${user.role}">
                        <p>BIO</p>
                        <textarea>${user.age}</textarea>
                    </div>
                    <button class="saveButton">Save</button>
                </div>
            </div>
        </div>
    </div>
    `
}

/*
*/

renderProfile()
