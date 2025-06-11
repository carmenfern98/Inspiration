export async function getImage(count = 5){
    const url = `http://localhost:4000/photos/random?count=${count}`;
    const response = await fetch(url)

    if(!response.ok) throw new Error ('Failed to fetch images')
    
    const data = await response.json();
    const imagesArray = Array.isArray(data) ? data : [data];
    return imagesArray.map (img=>({
              imageurl: img.urls.full,
              author: img.user.name
    }))
}