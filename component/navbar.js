function navbar(){
    return `<nav class="navbar">

    <img src="https://www.transparentpng.com/thumb/sushi/FjiXtn-sushi-food-picture.png"
        alt="Sushi Food Picture @transparentpng.com" width="150px" height="100px">
   
    <input type="text" placeholder="Search for Recipi" id="s_data">
    <button id="btn">Search</button>
    <h3 id="Day">Recipis of the Day</h3>
    <h3 id="latest">Latest Recipi</h3>

   </nav>
   <div id="data_div">
   
   </div>`;
}

export default navbar();