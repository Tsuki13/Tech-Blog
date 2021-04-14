const savePost = document.getElementById('postSave');

const createPost = async (e) => {
    e.preventDefault();

    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;

    if (title && description) {
        const response = await fetch("api/posts", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace("/dashboard")

        } else {
            const p = document.createElement("p");
            p.textContent = "Fill out title and description."
            p.setAttribute("class", "red has-text-centered ml-5");

            document.getElementById("form").appendChild(p);
        }
    }
}

savePost.addEventListener("click", createPost)