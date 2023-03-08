## HÀM GỬI EMAIL CHO NGƯỜI KHÁC 
  -- EMAILJS-COM
  >>> npm i emailjs-com --save
  >>> LINK :https://www.emailjs.com/

  HOW TO USE:

 const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs.sendForm('service_1wk1ua5', 'template_4sztiyb', form.current, '3_NM92GAJv_CLFzdm')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };