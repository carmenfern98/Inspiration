export async function getQuote(){
    const url = 'https://inspiration-production-a80b.up.railway.app/quote';
    const response = await fetch(url);

    if(!response.ok) throw new Error('Failed to fetch quote')
    
    const data = await response.json();
    return { content: data[0].q,
        author: data[0].a
    }

};