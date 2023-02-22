import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { createPost } from '../redux/PostSlice';
import PageSpinner from './PageSpinner';


const CreatePost = () => {
  const [values,setvalues] = useState(
    {
      title:"",
      body:""
    }
  )

  const {loading,post} = useSelector(state =>({...state.post}))

  const {title,body} = values
  const dispatch = useDispatch();
  const navigate  = useNavigate() 

  const handleSubmit = (e)=>{
     e.preventDefault();
    dispatch(createPost({
      values
    }))
    setvalues({title:"",body:""})
    setShowPost(true)
  }

  

  return (
    <>

    <h1 className='text-center'>Create Post</h1>
    <Card className='mx-auto'
    style={{width:"60%"}}>

    <Form >
    <Form.Group className="mb-3 p-3" controlId="formBasicEmail">
        <p className='display-6'>Enter Title</p>
        <Form.Control type="text" placeholder="Enter  Post Title"
        values={title}
        onChange={(e)=> setvalues({...values,title:e.target.value})} />
      
      </Form.Group>

      <p className='display-6 px-3'>Enter Body Text</p>
<div className="container p-3">

        <Form.Control as="textarea" placeholder="Body text here..." className='p-3' 
        values={body}
        onChange={(e)=>setvalues({...values,body:e.target.value})}/>

</div>

      
    </Form>

    <div className="container text-end">

<Button variant="primary" className="m-3" onClick={()=>navigate("/")}>Go Home</Button>
<Button variant="danger" type="submit" className="m-3"
onClick={handleSubmit} > Submit</Button>

</div>

    </Card>



    {
      loading?<PageSpinner/>:(
        <>
         <Card style={{ width: "50%" }} className="mx-auto shadow border-warning mt-5">
              
              <Card.Body>
                <Card.Title className="text-uppercase">{post[0].title}</Card.Title>
                <Card.Text>
              {post[0].body}
                </Card.Text>
               

              </Card.Body>
            </Card>
        </>
      )
    }


    </>
  )
}

export default CreatePost