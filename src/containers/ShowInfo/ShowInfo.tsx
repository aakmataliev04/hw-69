import React, {useEffect} from 'react';
import Search from '../Search/Search';
import {useParams} from 'react-router-dom';
import {AppDispatch} from '../../app/store';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {fetchShowInfo} from '../../store/showInfoSlice';
import './ShowInfo.css';

const ShowInfo = () => {
  const {id} = useParams();
  const dispatch: AppDispatch = useAppDispatch();
  const show = useAppSelector(state => state.showInfo.show);

  useEffect(() => {
    dispatch(fetchShowInfo(id));
  }, [dispatch, id]);


  const showImage = show.image && show.image.medium;

  return (
    <div className={'show-info'}>
      <Search />
      <div className={'show-details'}>
        <div>
          <img src={showImage} alt={show.name} />
        </div>
        <div style={{width: '500px'}}>
          <h3>{show.name}</h3>
          <div>Type: <strong>{show.type}</strong></div>
          <div>Language: <strong>{show.language}</strong></div>
          <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
          <div>genre: {show.genres}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
