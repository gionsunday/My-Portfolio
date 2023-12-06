window.addEventListener('load', () =>{
    const nameIn = document.querySelector('#name');
    const emailIn  = document.querySelector('#email');
    const subjectIn  = document.querySelector('#subject');
    const messageIn = document.querySelector('#message');
    const sendBtn  = document.querySelector('#form-submit');
   const form = document.querySelector('#contact')

  //  form.addEventListener('submit', async (e) =>{
      
   sendBtn.addEventListener("click", async (e) =>{
    e.preventDefault()
  
      const name = nameIn.value;
      const email = emailIn.value;
      const subject = subjectIn.value;
      const message = messageIn.value;

      if(!name || !email || !message){
        alert('Please provide your details!')
      }
      else{
        sendBtn.textContent = "Sending Message..."
        nameIn.value =""
        emailIn.value =""
        subjectIn.value = ""
        messageIn.value =""
        try {
          const data =  await axios.post('/api/v01/sendmessage', {
                name:name, email:email, subject:subject, message:message
            })
            
            sendBtn.textContent = "Message Sent. Thank You!"
            sendBtn.classList.add('success')
          
            
              sendBtn.classList.remove('success')
              sendBtn.textContent = "Send Message"
            
            
        } catch (error) {
            console.log(error)
        }
      }
    })
    

})