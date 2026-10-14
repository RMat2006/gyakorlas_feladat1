const postMethod = async (url, data)=>{
    
    try{
       const response = await fetch(url,{
        method: 'POST',
        headers :{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
       });
       if(!response.ok){
            throw new Error("Hiba: ")
       }
       return response.json();
    }
    catch(error){
        throw new Error("Hiba: ")
    }
}

document.addEventListener("DOMContentLoaded", async ()=>{
    document.getElementById("sendBtn").addEventListener("click",async ()=>{
        const sender = document.getElementById("sender").value
        const message = document.getElementById("message").value

        try{
            const response = await postMethod('/api/sendMessage',{
                sender: sender,
                message:message
            })

            document.getElementById("forResponse").innerHTML=response.message;
        }
        catch(error){
            console.error("Hiba: ", error)
        }
    })
})