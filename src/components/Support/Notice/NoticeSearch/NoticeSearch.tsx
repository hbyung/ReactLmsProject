import { useEffect, useRef, useState } from 'react';
import './styeld.css';
import { useNavigate } from 'react-router-dom';

export const NoticeSearch = () => {

  const title = useRef<HTMLInputElement>(null);
  const [startDate, setStarDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const navigate = useNavigate();

  useEffect(()=>{
    window.location.search && navigate(window.location.pathname)
  },[navigate])

  const handlerSearch = () => {
    //console.log(startDate, endDate, title.current?.value);
    const query:string[] = [];

    !title.current?.value || query.push(`title=${title.current.value}`);
    !startDate || query.push(`startDate=${startDate}`);
    !endDate || query.push(`endDate=${endDate}`);

    const querySring = query.length > 0 ? `?${query.join("&")}` : '';

    navigate(querySring);
  };

  return (
    <div className="notice-container">
      <div className="input-box">
        제목: <input ref={title}></input>
        <input 
        type="date" 
        onChange={(e) => setStarDate(e.target.value)}
        ></input>
        <input 
        type="date" 
        onChange={(e) => setEndDate(e.target.value)}
        ></input>
        <button onClick={handlerSearch}>검색</button>
        <button>등록</button>
      </div>
    </div>
  );
};
