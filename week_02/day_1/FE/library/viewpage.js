let bookdetails=JSON.parse(localStorage.getItem("bookDetails")) || [];
       
       let main=document.querySelector(".main");
       
       let cards=document.createElement("div");
            
       
       
       for(let i=0;i<bookdetails.length;i++)
       {
            //console.log(bookdetails[i]);
           let details=document.createElement("div");
           
            let img=document.createElement("div");
             
            let image=document.createElement("img");
            
            image.setAttribute("src",bookdetails[i].avatar);
            
            let author=document.createElement("div");
            
            author.innerText="author:"+bookdetails[i].author;
            
            let name=document.createElement("div");
            
            name.innerText=bookdetails[i].name;
            
            let publisher=document.createElement("div");
            
            publisher.innerText="publisher:"+bookdetails[i].publisher;
            
            details.append(name,img,author,publisher,);
            
            img.append(image);
            
            cards.append(details);
            
           author.style.fontSize="20px";
            author.style.marginTop="20px";
            name.style.fontSize="28px";
            name.style.color="yellow";
            name.style.marginBottom="20px";
            cards.style.display="flex";
            cards.style.flexWrap="wrap";
            cards.style.marginLeft="80px";
            
            details.setAttribute("class","details");
    
            img.style.textAlign="center";
       }
       main.append(cards);
       
       
