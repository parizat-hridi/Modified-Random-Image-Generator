const numItemsToGenerate = 1;

function downloadImage(url) {
  let a = document.createElement("a");
  a.href = url;
  a.download = 'image.jpg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

}

 function renderItem() {
   fetch(`https://source.unsplash.com/920x720?beach`)
  .then(resp => resp.blob())
  .then(image => {
    const image_url = URL.createObjectURL(image)
    let item = document.getElementById('container');
    item.innerHTML = `<img class="oceanImage" src="${image_url}" alt="Random image"/>`;
    return image_url;
  }).then(url=>document.querySelector(".download").onclick = ()=>downloadImage(url))
}

renderItem()

function tweetCurrentPage()
    { window.open("https://twitter.com/share?url="+ encodeURIComponent(window.location.href)+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false; }
