async function getObject(link) {
    const response = await fetch(`${link}`);
    if (!response.ok){
        throw new Error ('Could not fetch link')
    }
    const posts = await response.json();
    const post = posts.find(el => el.id===5);
    return post;
}
getObject('https://jsonplaceholder.typicode.com/posts')
   .then(v => console.log(v));