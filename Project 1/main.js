
       alert(
       'Excel Agrochemicals'
);

         


           var form = document.getElementById('TOM')
           form.addEventListener('submit',function(event){
              event.preventDefault()

              var ExcelAgrotype = document.getElementById('ExcelAgro-type').value

              console.log(ExcelAgrotype)

              var Agroname = document.getElementById('Agro-name').value

              console.log(Agroname)

              var Residence= document.getElementById('Residence').value

              console.log(Residence)

              var paymentmethod= document.getElementById('payment').value

              console.log(paymentmethod)

              var DeliveryDate = document.getElementById(Date).value

              console.log(DeliveryDate)



              var email = document.getElementById('email').value

              console.log(email)
           }
       )

       if (emailValue === '') {
              SetError(email, 'Email is required');
       }  else if (! isValidEmail(emailValue)) {
              SetError(email,'provide a valid email address');
       }  else {
              setsuccess(email);
       }  

 
       
       
















