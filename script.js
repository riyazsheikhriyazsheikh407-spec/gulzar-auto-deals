document.querySelectorAll("a").forEach(link=>{
link.addEventListener("click",function(e){
const target=this.getAttribute("href");

if(target.startsWith("#")){
e.preventDefault();
document.querySelector(target).scrollIntoView({
behavior:"smooth"
});
}
});

console.log("Welcome to Gulzar Auto Deals");
