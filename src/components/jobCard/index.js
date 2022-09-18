import React from 'react';
import LocationIcon from './location-icon.svg';
import classes from './JobCard.module.css';

export default function JobCard({ jobData, setModalState }) {
  const showModalHandler = () => {
    setModalState({
      show: true,
      jobId: jobData.id
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '18%',
        boxSizing: 'border-box',
        margin: '0 10px 10px 0',
        height: '192px',
        borderRadius: '5px',
        padding: '15px',
        boxSizing: 'border-box',
        boxShadow: '0px 3px 6px #557DA526',
        background: 'white',
        justifyContent: 'space-between'
      }}
      id={jobData.id}
    >
      <>
        <p
          style={{
            width: '100%',
            overflow: 'hidden',
            height: '20px',
            margin: '0 0 10px 0',
            color: '#303F60',
            opacity: '1',
            fontSize: '17px',
            textOverflow: 'ellipsis'
          }}
        >
          {jobData.title}
        </p>
        <p className={classes.description}>{jobData.description}</p>
      </>
      <div
        style={{
          height: '50px',
          width: '100%',
          display: 'flex',
          overflow: 'hidden',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '40%',
            margin: '0 20px 0 0'
          }}
        >
          <img src={LocationIcon}></img>
          <p
            style={{
              margin: '0 0 0 12px',
              width: '50%',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {jobData.location}
          </p>
        </div>
        <div
          style={{
            width: '50%',
            height: '32px',
            borderRadius: '5px',
            background: '#43AFFF33',
            boxSizing: 'border-box',
            padding: '6px 0 6px 13px',
            cursor: 'pointer'
          }}
          onClick={showModalHandler}
        >
          <p style={{ fontSize: '12px' }}>View Applications</p>
        </div>
      </div>
    </div>
  );
}
