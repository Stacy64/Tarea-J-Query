$(document).ready(function() {
    const userList = $("#user-list");

    $.getJSON("https://reqres.in/api/users", function(data) {
        const users = data.data;

        $.each(users, function(index, user) {
            const userCard = `
                <div class="col">
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
                </div>
            `;
            userList.append(userCard);
        });
    }).fail(function() {
        console.error("Error al cargar los usuarios.");
        userList.html('<p class="text-danger text-center">No se pudo cargar la lista de usuarios.</p>');
    });
});
