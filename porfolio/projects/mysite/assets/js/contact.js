window.addEventListener('load', () =>{
    const nameIn = document.querySelector('#name');
    const emailIn  = document.querySelector('#email');
    const messageIn = document.querySelector('#message');
    const sendBtn  = document.querySelector('#form-submit');

    sendBtn.addEventListener('click', async (e) =>{
    e.preventDefault()
      const name = nameIn.value;
      const email = emailIn.value;
      const message = messageIn.value;

      if(!name || !email || !message){
        alert('Please provide your details!')
      }
      else{
        try {
            await axios.post('', {
                name:name, email:email, message:message
            })
        } catch (error) {
            console.log(error)
        }
      }

    })

})