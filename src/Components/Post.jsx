import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost, getPost } from "../redux/PostSlice";
import Spinner from "./PageSpinner";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const { loading, post } = useSelector((state) => state.post);
  const handleFetchData = (e) => {
    e.preventDefault();
    if (!id) {
      window.alert("Please Provide PostID");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };

  const handleDelete=({id})=>{
    dispatch(deletePost({id:post[0]}))
    window.location.reload();
    window.alert("Post Deleted!")
      
  }
  return (
    <>
      <div className="container m-5 mx-auto">
        <Card className="border-warning shadow ">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h3 className="text-center">Search By ID:</h3>
              <Form.Control
                type="number"
                placeholder=""
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>

            <div className="container text-center">
              <Button
                variant="primary"
                type="submit"
                className="m-3"
                onClick={handleFetchData}
              >
                Fetch Post
              </Button>
              <Button
                variant="warning"
                type="submit"
                className="m-3"
                onClick={() => navigate("/createPost")}
              >
                Create Post
              </Button>
            </div>
          </Form>
        </Card>
      </div>

      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {post.length > 0 && (
              <>
                <Card style={{ width: "50%" }} className="mx-auto shadow border-warning">
              
                  <Card.Body>
                    <Card.Title className="text-uppercase">{post[0].title}</Card.Title>
                    <Card.Text>
                    {post[0].body}
                    </Card.Text>
                    <div className="container text-end">

                    <Button variant="primary" className="m-3">Edit</Button>
                    <Button variant="danger" className="m-3" onClick={handleDelete}> Delete</Button>

                    </div>

                  </Card.Body>
                </Card>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Post;
