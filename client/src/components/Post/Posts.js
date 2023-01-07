import React from 'react'
import "./Posts.css";
import Button from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {Link, useNavigate} from "react-router-dom";

const Post = ({title}) => {
  return (
    <div className="posts">
        <div className="posts__header">
          <div className="title">
              <h3>{title}</h3>
          </div>
          <div className="posts__add">
          <Button>
          <AddIcon />
          <Link to='/createpost'>
          create post
          </Link>
          
          </Button>
          
           
          </div>
        </div>
        <div className="posts__body">
          <div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div><div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="card__right">
                <h4>card1</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipi!</h5>
            </div>
          </div>
          </div>
          </div>
    
  )
}

export default Post