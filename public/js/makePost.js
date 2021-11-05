console.log("page load");

const makePost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#new-postTitle").value.trim();
  const content = document.querySelector("#new-post").value.trim();

  try {
    const response = await fetch("/api/post/homepage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

document.querySelector("#post-btn").addEventListener("click", makePost);
