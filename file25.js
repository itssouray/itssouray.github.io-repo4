// let v = "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"

let Idno = 0;
let genNum = 0;
let prevData=''




function getShortLink(){
    let input_box = document.getElementById("search-value")
    let input_value=input_box.value
    let data_box = document.getElementById("data_box")

    if(input_value==""){
        input_box.style.border="1px solid red";
        alert("please enter the url first")
   
        }
    else{
        input_box.style.border="none";

        fetch(`https://api.shrtco.de/v2/shorten?url=${input_value}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data.result.full_short_link)
            console.log("im working")

        // calling function to append shorted link in the form of list---------
        createElements(input_value,data.result.full_short_link)

        }) 
    }
}



function createElements(input_value,data){
    Idno+=1;
     
    let link_container = document.getElementById("data_box")
    link_container.classList.remove("link_data")

    let outer_div = document.createElement("div")
    outer_div.className="link_box"


    const para = document.createElement("p");
    let original = document.createTextNode(input_value);
    para.appendChild(original)


    
    const a = document.createElement("a");

    let shortedTextLink = document.createTextNode(data);
    a.appendChild(shortedTextLink)

    const btn = document.createElement("button");
    let btnText = document.createTextNode("Copy")
    btn.appendChild(btnText)

 

    const inner_div =document.createElement("div");
    inner_div.className = "short_link"
    inner_div.appendChild(a)
    inner_div.appendChild(btn)


    outer_div.appendChild(para)
    outer_div.appendChild(inner_div)

    link_container.appendChild(outer_div)

    //storing data on local storage--------------------
//     storeInputData(input_value,data)

    // console.log(data)
}






// function storeInputData(input,data){
//     let arr = [{
//         inputValue : input,
//         shortedValue : data
//     }]

//    let key = Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
//    console.log(key)
//     //converting array into string using JSON.stringify() ------
//     window.localStorage.setItem(key,JSON.stringify(arr))  

// }


    window.localStorage.clear()

//     function restore(prevData){
          
//         let l = prevData.length
//         console.log(prevData)

//         for(let i=0;i<l;i++){
//           createElements(prevData[i][0].inputValue,prevData[i][0].shortedValue)
//         }
//   }


    
//    function  getData(){
//         prevData='';
//         console.log("this is prev data : ",prevData)

//         let obj=[]
//         let key=''
//         for(let i=0;i<10;i++){
//          key = window.localStorage.key(i)
//          let temp = window.localStorage.getItem(key)
//          if(temp!=null)
//          obj.push(JSON.parse(temp))
//         }
        
//         if(obj===null){
//             return ;
//         }
//         else{
//             prevData=obj
//             restore(prevData)
//         }
//     }


    // console.log(prevData[1][0])
  


//     let body = document.getElementById("master")
//     body.addEventListener("onload",

//         getData()
//     )







        // for(let i=0;i<10;i++){
        //to get the key in case we dont know, we can use key() function
        // let k = window.localStorage.key(i)
        // let d = window.localStorage.getItem(k)
        // console.log(k,": ",JSON.parse(d))
    // }

        //converting string back to array using JSON.parse() ------  
    // ----> let d = window.localStorage.getItem(key)
    //-----> console.log(JSON.parse(d)[0])


        //for removing item from local storage we can use removeItem function-----
    //----> window.localStorage.removeItem(key)
