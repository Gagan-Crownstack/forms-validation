// Add new component here
const pageComponent=[
    {
        path:'./components/Navbar.html',
        tag:"navbar",
        func:""
    },
    {
        path:'./components/Signup.html',
        tag:'signup',
        func:""
    },
    {
        path:"./components/SignupDynamic.html",
        tag:"signupdynamic",
        func:""
    }
    
]

//function for maping components on root page
pageComponent.map((component)=>{
    fetch(`${component.path}`).then((res)=> res.text()).then((data)=>{
        document.querySelector(`${component.tag}`).innerHTML += data
        if (typeof component.func === 'function') {
                component.func();
            }
    }).catch((e)=>{
        console.log("Error",e);
    })
})


// form with validation on submit
const onSubmitValidation=()=>
    {
        //input tags 
        const username= document.getElementById('username');
        const email = document.getElementById('email');
        const password=document.getElementById('password');

        //error tags
        const errorusername= document.getElementById('error-username');
        const erroremail =document.getElementById('error-email');
        const errorpassword = document.getElementById('error-password');
        const confirmation = document.getElementById('confirmation');
    

        isValid=true;

        // console.log("asd");
        document.addEventListener('click', () => {
            console.log("bhai")
        })
        


        // debugger;
        
        // initialising error to empty string
        errorusername.textContent='';
        erroremail.textContent='';
        errorpassword.textContent='';
        confirmation.textContent='';

        // getting the values of Input fields
        let usernameval= username.value.trim();
        let emailval= email.value.trim();
        let passwordval=password.value;


        if(usernameval.length < 5){
            //return error
           errorusername.textContent= "the length must be greater than 5"
            username.style.borderColor="red";
           isValid=false;
        }else{
            username.style.borderColor="green";

        }

        const emailpattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!emailpattern.test(emailval)){
            erroremail.textContent= "enter a valid email"
            document.getElementById('email').style.borderColor="red";
            isValid=false;
        }else{
            email.style.borderColor="green";

        }

        if(passwordval.length <6 ){
            errorpassword.textContent="the password must be greater than 6"
            document.getElementById('password').style.borderColor="red";
            isValid=false;
        }else{
        password.style.borderColor="green";

        }

        if(isValid){
            console.log('username', usernameval);
            console.log('email', emailval);
            console.log('password',passwordval);

            confirmation.innerHTML="Valid !!";
            confirmation.style.color='green';
        username.style.borderColor="grey";
        email.style.borderColor="grey";
        password.style.borderColor="grey";
        }
        else{

            confirmation.innerHTML="Invalid !!"
            confirmation.style.color="red"
        }
    }


    //  dynamic validation
// function onSubmitValidationDynamic(){
//         const username= document.getElementById('usernamed');
//         const email = document.getElementById('emaild');
//         const password=document.getElementById('passwordd');

//         //error tags
//         const errorusername= document.getElementById('error-usernamed');
//         const erroremail =document.getElementById('error-emaild');
//         const errorpassword = document.getElementById('error-passwordd');

//         console.log(username,email,password);

//         username.addEventListener('click',()=>{
            
//         })



    
// }