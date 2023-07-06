import React, { useState } from 'react';
import { deletePostUser, updatePostUser} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const Card = ({ post }) => {
  const dispatch =useDispatch();
  const [likesCount, setLikesCount] = useState(0);
  const user = useSelector((state) => state.userLogin)
  

  const handleLikeClick = () => {
    setLikesCount(likesCount + 1);
  };

  const handleDelete = () => {
    dispatch(deletePostUser(post.id_post));
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  return (
    <div className="card mb-3" key={post.id}>
      <div className="row g-0">
        <div className="col-md-4">
          {post.image && <img src={post.image.url} alt={post.title} className="img-fluid rounded-start" />}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-2x1 font-bold text-black">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <div className="space-x-6">
              {user.user_datum?.rol === "admin"?<button type="button" className="btn btn-dark text-dark color-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Eliminar
              </button> : null}
              
            </div>
            <p className="card-text">
            </p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmación</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar este posteo?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark text-dark" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger text-dark" onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



