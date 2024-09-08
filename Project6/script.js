const getFace = async (event) => {
  event.preventDefault();
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const ethnicity = document.getElementById('ethnicity').value;
  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4d9ee6fff6msh58265b6751f9e42p10ff84jsn61d6cdb1298a',
      'x-rapidapi-host': 'face-studio.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.blob();
    const image = URL.createObjectURL(result);
    const imageDOM = document.createElement('img');
    const parDOM = document.createElement('p');
    parDOM.textContent = url;
    imageDOM.src = image;
    document.body.appendChild(parDOM);
    document.body.appendChild(imageDOM);
  } catch (error) {
    console.error(error);
  }
};

document.querySelector('#form').addEventListener('submit', getFace);
