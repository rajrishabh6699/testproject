import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header';
import JobCard from '../../components/jobCard';
import { getJobs } from './jobDetailsPage.utils';
import { customStyles } from './jobDetailsPage.constants';
import HomeIcon from './home-icon.svg';
import EmptyIcon from './empty-icon.svg';
import JobModal from '../../components/jobModal';

const JobDetailsPage = () => {
  const [modalState, setModalState] = useState({
    show: false,
    jobId: null
  });
  const [jobsData, setJobsData] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  const closeModal = () =>
    setModalState({
      show: false,
      jobId: null
    });

  useEffect(() => {
    getJobs(pageCount).then(data => setJobsData(data));
  }, [pageCount]);

  return (
    <>
      <div
        style={{
          padding: '0 70px',
          background:
            'transparent linear-gradient(260deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box',
          height: '270px'
        }}
      >
        <Header />
        <div style={{ borderTop: '1px solid white', margin: '22px 0 0 0' }}>
          <div
            style={{
              display: 'flex',
              margin: '12px 0 0 50px',
              height: '15px',
              alignItems: 'center'
            }}
          >
            <img src={HomeIcon} height="15px"></img>
            <p style={{ color: 'white', fontSize: '15px', margin: '0 0 0 8px' }}>Home</p>
          </div>
          <p style={{ color: 'white', margin: '24px 0 0 50px', fontSize: '22px' }}>
            Jobs posted by You
          </p>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          background: '#EDF6FF',
          boxSizing: 'border-box',
          padding: '0 70px',
          position: 'absolute'
        }}
      >
        <div
          style={{
            position: 'relative',
            top: '-50px',
            left: '52px',
            width: '100%',
            display: 'flex',
            overflow: 'hidden',
            flexWrap: 'wrap',
            background: 'transparent',
            boxSizing: 'border-box'
          }}
        >
          {jobsData ? (
            jobsData.map(job => (
              <JobCard jobData={job} key={job.id} setModalState={setModalState} />
            ))
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: 'calc(100vh - 310px)',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 150px 0 0'
              }}
            >
              <img src={EmptyIcon} />
              <p style={{ margin: '20px 0 0 0', color: '#303F60' }}>
                Your posted jobs will show here.
              </p>
              <button
                style={{
                  background: '#43AFFF',
                  width: '148px',
                  padding: '13px 34px 14px 34px',
                  border: '1px solid #43AFFF',
                  borderRadius: '5px',
                  color: '#FFFFFF',
                  margin: '40px 0 0 0 '
                }}
              >
                Post a Job
              </button>
            </div>
          )}
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <p
            style={{ cursor: pageCount == 1 ? 'not-allowed' : 'pointer' }}
            onClick={() => pageCount >= 2 && setPageCount(pageCount - 1)}
          >
            P
          </p>
          <p style={{ margin: '0 12px' }}>{pageCount}</p>
          <p style={{ cursor: 'pointer' }} onClick={() => setPageCount(pageCount + 1)}>
            N
          </p>
        </div>
      </div>

      {modalState.show && (
        <Modal
          isOpen={modalState.show}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <JobModal modalState={modalState} setModalState={setModalState} />
        </Modal>
      )}
    </>
  );
};

export default JobDetailsPage;
