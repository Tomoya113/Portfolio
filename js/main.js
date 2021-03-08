window.onload = () => {
    // Recent postsのコンテンツ生成
    fetch('https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=8', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + "56b2308c8f214961aa15a809828eb28c4a5f62f9",
      }
    }).then(response => response.json())
      .then(data => {
        const postsContainer = document.getElementById('posts-container')
        data.map( post => {
          const container = document.createElement("a")
          const image = document.createElement("img")
          const link = document.createElement("p")
          container.setAttribute("class", "post")
          container.setAttribute("href", post.url)
          image.setAttribute("src", "./images/writing/qiita.png")
          image.setAttribute("width", "87px")
          const postTitle = document.createTextNode(post.title)
          link.appendChild(postTitle)
          container.appendChild(image)
          container.appendChild(link)
          postsContainer.appendChild(container)
        })
      })
}