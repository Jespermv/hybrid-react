import { useLocation } from "react-router-dom";
import {MediaItem} from "hybrid-types/DBTypes"
import { NavigateFunction, useNavigate } from "react-router";

const Single = () => {
  const navigate: NavigateFunction = useNavigate();
  const {state} = useLocation();
  const item: MediaItem = state.item
  return (
    <>
      <h2>Single</h2>
      <h3>{item.title}</h3>
      <p>{new Date(item.created_at).toLocaleString('fi-FI')}</p>
      {item.media_type.includes('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}
      <p>{item.description}</p>
      <button onClick={() => {navigate(-1)}}>Go Back</button>
    </>
  );
};

export default Single;
