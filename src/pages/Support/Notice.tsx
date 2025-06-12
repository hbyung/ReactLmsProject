import { useLocation } from 'react-router-dom';
import { ContentBox } from '../../components/common.componets/ContentBox/ContentBox';
import { NoticeMain } from '../../components/Support/Notice/NoticeMain/NoticeMain';
import { NoticeSearch } from '../../components/Support/Notice/NoticeSearch/NoticeSearch';
import axios from 'axios';
import { useEffect } from 'react';

export const Notice = () => {

  const { search } = useLocation();

  useEffect(()=>{
    seearchList();
  }, [search])

  const seearchList = (cPage?:number) => {
    const searchParam = new URLSearchParams(search);

    cPage = cPage || 1;

    searchParam.append('currentPage',cPage.toString());
    searchParam.append('pageSize', '5');

    axios.post('/api/support/noticeListBody.do', searchParam);
  }

  return(
    <>
      <ContentBox>공지사항</ContentBox>
      <NoticeSearch />
      <NoticeMain />
    </>
  );
};
