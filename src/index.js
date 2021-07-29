// write your code here
// write your code here
const fgImage = document.getElementById('fg-image');

fetch('http://localhost:3000')
    // 'Content-Type' : 'db.json',
    // 'Accept' : 'db.json'
    .then((res) => res.json())
    .then(handleData);

    function handleData(dogs){
        dogs.forEach(images => {
            console.log(images.id)
        const fgSpan = document.createElement('span');
            fgSpan.innerText = images.id
            fgImage.append(fgSpan);
            

        });
    }
    function addComents(){
        dogs.forEach(comments => {
            console.log(comments.id)
        });
    }