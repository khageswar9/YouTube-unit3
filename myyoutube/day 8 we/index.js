var viewData = [];

const main = async () => {
    var key = "AIzaSyAv-E8CXRC1bCy7X068KCakRYznJNkTz-E";
    var input = document.getElementById("search").value;
    try{
        var res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${key}`);
        var data = await res.json();
        var dtaarray = data.items;
        showData(dtaarray);
    }
    catch(err){
        console.log(err)
    }
}

const showData = (dtaarray)=> {
    document.getElementById("display").innerHTML="";
    dtaarray.map((obj)=>{
        var div = document.createElement("div");
        div.id="result";
        div.addEventListener("click",function(){
            view(obj);
          });

        var imgdiv = document.createElement("div");
        imgdiv.id = "imgdiv";
        var textdiv = document.createElement("div");
        textdiv.id = "textdiv";

        var thumb = document.createElement("img");
        thumb.src = obj.snippet.thumbnails.medium.url;
        thumb.id = "thumb";

        var title = document.createElement("h6");
        title.textContent =obj.snippet.title;

        var channel = document.createElement("p");
        channel.textContent = obj.snippet.channelTitle;

        imgdiv.append(thumb);
        textdiv.append(title,channel);
        div.append(imgdiv,textdiv);
        document.getElementById("display").append(div);

    })
}

const view = (obj)=>{
    viewData.push(obj);
    localStorage.setItem("viewData",JSON.stringify(viewData));
    window.location.href = "view.html";
}

const front = async () => {
    var key = "AIzaSyAv-E8CXRC1bCy7X068KCakRYznJNkTz-E";
    var input = "top 20 trending";
    try{
        var res2 = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${key}`);
        var data2 = await res2.json();
        var dtaarray2 = data2.items;
        showData(dtaarray2);
    }
    catch(err){
        console.log(err)
    }
}
front();