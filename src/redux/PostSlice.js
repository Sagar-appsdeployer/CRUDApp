import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getPost = createAsyncThunk('Post/getPosts',
async({id})=>{
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res=>res.json())
});

export const deletePost = createAsyncThunk('Post/deletePosts',
async({id})=>{
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    method:"DELETE"
  })
  .then(res=>res.json())
});

export const createPost = createAsyncThunk('Post/createPost',
async({values})=>{
  return fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method:"POST",
    headers:{
      Accept:'application/json',
      'content-type':'application/json'
    },
    body:JSON.stringify({
      title:values.title,
      body:values.body
    })
  })
  .then(res=>res.json())
})



const initialState ={
    loading:false,
    post:[],
    error:null
}
export const PostSlice = createSlice({
    name:"post",
    initialState,
    reducers:{

    },
    extraReducers:{
          
          [getPost.pending]:(state,action)=>{
            state.loading = true
          },
          [getPost.fulfilled]:(state,action)=>{
            state.loading  = false;
            state.post = [action.payload]
          },
          [getPost.rejected]:(state,action)=>{
            state.loading = false,
            state.error = action.payload
          },
          [deletePost.pending]:(state,action)=>{
            state.loading = true
          },
          [deletePost.fulfilled]:(state,action)=>{
            state.loading  = false;
            state.post = action.payload
          },
          [deletePost.rejected]:(state,action)=>{
            state.loading = false,
            state.error = action.payload
          },
          [createPost.pending]:(state,action)=>{
            state.loading = true
          },
          [createPost.fulfilled]:(state,action)=>{
            state.loading  = false;
            state.post = [action.payload]
          },
          [createPost.rejected]:(state,action)=>{
            state.loading = false,
            state.error = action.payload
          },
    }
})

// export const  {} = PostSlice.actions;
export default PostSlice.reducer;