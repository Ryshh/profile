const user = [
    { name: "Kiss Éva", age: 28, email: "eva@example.com", avatar: "https://i.pravatar.cc/250?img=1" },
    { name: "Nagy Anna", age: 34, email: "anna@example.com", avatar: "https://i.pravatar.cc/250?img=2" },
    { name: "Szabó Gábor", age: 41, email: "gabor@example.com", avatar: "https://i.pravatar.cc/250?img=3" },
    { name: "Tóth Péter", age: 25, email: "peter@example.com", avatar: "https://i.pravatar.cc/250?img=4" },
    { name: "Varga László", age: 39, email: "laszlo@example.com", avatar: "https://i.pravatar.cc/250?img=6" },
    { name: "Molnár Júlia", age: 31, email: "julia@example.com", avatar: "https://i.pravatar.cc/250?img=5" },
    { name: "Balogh István", age: 45, email: "istvan@example.com", avatar: "https://i.pravatar.cc/250?img=7" },
    { name: "Kovács Zsolt", age: 29, email: "zsolt@example.com", avatar: "https://i.pravatar.cc/250?img=8" },
    { name: "Horváth Bea", age: 36, email: "bea@example.com", avatar: "https://i.pravatar.cc/250?img=9" }
]

function renderProfiles()
{
    console.log(users);
    users.forEach(({name, age, email, avatar}) => 
        {
            document.querySelector(".cards-container").innerHTML += `
                <div class="card">
                    <img src="${avatar}">
                    <h2>${name}</h2>
                    <p>${age}</p>
                    <p>${email}</p>
                </div>
            `
        });
}

renderProfiles()