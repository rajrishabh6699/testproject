import axios from 'axios';
import { AuthToken } from './jobDetailsPage.constants';

export const getJobs = async pageCount => {
  try {
    const {
      data: { data, success }
    } = await axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs`, {
      headers: {
        Authorization: AuthToken
      },
      params: {
        page: pageCount
      }
    });
    if (success && data) return data.data;
    return null;
  } catch (error) {
    console.error('error fetching data: ', error);
  }
};
