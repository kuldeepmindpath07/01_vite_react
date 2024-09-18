

export function ReactForm(){
    let data={
        name:'',
        email:'',
        contact:'',
        password:'',
        confirmPassword:'',
        gender:'',
        subject:{
            english:false,
            math:false,
            science:false
        },
        photo:'',
        language:'',
        about:''
    }
    function handleSubmit(e){
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        data.name=form.get('name');
        data.email=form.get('email');
        data.contact=form.get('contact');
        data.password=form.get('password');
        data.confirmPassword=form.get('password')
        data.gender=form.get('gender');
        if(form.get('english')=='on'){
            data.subject.english=true;
        }
        if(form.get('math')=='on'){
            data.subject.math=true
        }
        if(form.get('science')=='on'){
            data.subject.science=true;
        }
        console.log(data);
        
        
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label htmlFor="name">Email</label>
            <input type="email" name='email' placeholder="Enter your email"  />
            <label htmlFor="name">Contact</label>
            <input type="text" name='contact' placeholder="Enter your number" />
            <label htmlFor="name">Password</label>
            <input type="password" name='password' placeholder="Enter your password"  />
            <label htmlFor="name">Confirm Password</label>
            <input type="password" name='confirmPassword' placeholder="Enter same password"  />
            <label htmlFor="gender">Gender</label>
            <div >
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="male"/>
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" value="female"/>
            <label htmlFor="others">Others</label>
            <input type="radio" name="gender" value="others"/>
            </div>
            <label className='subject' htmlFor="subject">Subject</label>
            <input type="checkbox" name='english' />
            <label className='box-type' htmlFor="english">English</label>
            <input type="checkbox" name="math" />
            <label htmlFor="math">Math</label>
            <input type="checkbox" name='science'/>
            <label htmlFor="science">Science</label>
            <label htmlFor="uploadPhoto">Upload photo</label>
            <input type="file" name="photo" accept="image/png,image/jpeg" />
            <select name="languages" id="lang">
                <option selected="true" value="language" disabled>Select a language</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="Python">Python</option>
            </select>
            <label htmlFor="about">About</label>
            <textarea name="about" id="about"></textarea>
            <button type="reset" value="reset">Reset</button>
            <button type="submit" value="Submit">Submit</button>
        </form>
        </>
    )
}