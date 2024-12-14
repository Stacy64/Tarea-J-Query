document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");


    fetch("https://reqres.in/api/users")
        .then((response) => {
            if (!response.ok) throw new Error("Error al obtener los usuarios");
            return response.json();
        })
        .then((data) => {
            const users = data.data;

            users.forEach((user) => {
                const userCard = document.createElement("div");
                userCard.className = "col";
                userCard.innerHTML = `
                    <div class="card h-100">
                        <img src="${user.avatar}" class="card-img-top" alt="Avatar de ${user.first_name}">
                        <div class="card-body">
                            <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                            <p class="card-text">Email: ${user.email}</p>
                        </div>
                        <div class="card-footer text-end">
                            <small class="text-muted">${user.id}</small>
                        </div>
                    </div>
                `;
                userList.appendChild(userCard);
            });
        })
        .catch((error) => {
            console.error("Error al cargar los usuarios:", error);
            userList.innerHTML = `<p class="text-danger text-center">No se pudo cargar la lista de usuarios.</p>`;
        });
});