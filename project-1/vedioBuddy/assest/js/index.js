fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&key=AIzaSyAdWaVR_CQXV4SELrqkK6_qbtvsepjE03o')
.then((res) => {
  return res.json();
}).then((data) => {
  const video_list = data.items;
  const parent_container = document.getElementById('card_container');

  for(let i =0; i < video_list.length; i++) {
    const single_video = video_list[i];
    const video_id = single_video.id;
    const thumbnail = single_video.snippet.thumbnails.high.url;
    const title = single_video.snippet.title;
    const channel_name = single_video.snippet.channelTitle;
    const view_count = single_video.statistics.viewCount;


    const title_elem = document.createElement('h5');
    title_elem.innerText = title;
    title_elem.classList.add("card-title");

    const anchor_elem = document.createElement('a');
    anchor_elem.href = `detail.html?id=${video_id}`;
    anchor_elem.appendChild(title_elem);

    const para_elem = document.createElement('p');
    para_elem.innerText = `${channel_name} || ${view_count} Views`;
    para_elem.classList.add('card-text');

    const div_elem = document.createElement('div');
    div_elem.classList.add("card-body");
    div_elem.appendChild(anchor_elem);
    div_elem.appendChild(para_elem);

    const image_elem = document.createElement('img');
    image_elem.src = thumbnail;
    image_elem.classList.add("card-img-top");

    const div_elem_1 = document.createElement('div');
    div_elem_1.classList.add("card");
    div_elem_1.classList.add("my-2");
    div_elem_1.style.width = "100%";
    div_elem_1.appendChild(image_elem);
    div_elem_1.appendChild(div_elem);

    const div_elem_2 = document.createElement('div');
    div_elem_2.classList.add("col");
    div_elem_2.appendChild(div_elem_1);

    parent_container.appendChild(div_elem_2);
  }
});



{/* <div class="col">
   <div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>

    </div>
</div> */}

 
  

  /**
   * Sample JavaScript code for youtube.videos.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("YOUR_API_KEY");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.videos.list({
//       "chart": "mostPopular",
//       "maxResults": 24
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "AIzaSyCLSZMeziQJug4u_ITd3cTJBO5FAHSetUY"});
//   });
