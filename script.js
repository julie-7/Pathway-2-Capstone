let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmeXB5em9wbHl6Znl3am5pdGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDczMTksImV4cCI6MjA0MzkyMzMxOX0.vANaYlT4x8hX9wjS_Yy2v4sOH-3OTJa577cAj_MAdXQ`
let endpoint = `https://dfypyzoplyzfywjnitcn.supabase.co/rest/v1/bookreadinglist`

let modalcomments
let modalbooks

let commentsbook = []

const onloadbooks = () => {
    getbooks()
    // getusernames() 
}

const showmodalbooks = () => {
    modalbooks = new bootstrap.modal(document.getElementById("modalbooks1"))
    modalbooks.show()
}

const getbooks = async () => {
    let response = await fetch(
        let`url` = `${endpoint}?order=title.asc`

    `let response` = await fetch(url,{
            method: `GET`,
            headers: {
                "apikey": token,
                "Authorization": token
            }
        })
    )
    let body = await response.json()
    if(response.ok){

        let tablelayout=`<tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
            </tr>`
        for(let i=0;i<body.length;i++){
            renderbooks(body)

            tablelayout`tr
            
            `
        
        }
    }
}



const createbook = async () => {
    let title = inputtitle.value
    let author = inputauthor.value
    let status = inputstatus.value


    let book = {
        title,
        author,
        status
    }


    let response = await fetch(endpoint, {
        method: `POST`,
        headers: {
            "apikey": token,
            "Authorization": token,
            "Content-Type": `application\json`

        },
    })

    if (response.ok) {
        window.location = "books.html"
    } else {
        console.log("book wasnt created")
        let body = await response.json()
        console.log(body)
    }

}
function renderbooks(data) {
    let tablelayout = `<tr>
<th>title</th>
<th>author</th>
<th>status</th>
<th>notes</th>
</tr>`
    for (let i = 0; i < data.length; i++) {
        tablelayout += `<tr>
        <td>${data[i].title}</td>
        <td>${data[i].author}</td>
        <td>${data[i].status}</td>
        <td>${data[i].notes}</td>
        <tr>`
    }
        loadbooks.innerHTML = tablelayout
}
