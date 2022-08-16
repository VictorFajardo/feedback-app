// React components
import { useEffect, useState } from "react";
// Redux components
import { useAppSelector } from '../../../app/hooks';
import { currentReview } from "../../../features/reviews/reviewsSlice";
// Material components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const defaultReviewFields = {
  reviewId: '',
  employeeName: '',
  employeeJobTitle: '',
  employeeemail: '',
  reviewBody: '',
  reviewerName: '',
  reviewerJobTitle: '',
  revieweremail: '',
  completed: false,
};

const ViewReview = ( props ) => {
  const { closeMethod } = props;
  const current = useAppSelector(currentReview); // Select the current review to display details
  const [reviewFields, setReviewFields] = useState(defaultReviewFields); // Review detail values
    const { employeeName, employeeJobTitle, employeeEmail, content, reviewerName, reviewerJobTitle, reviewerEmail } = reviewFields;

    useEffect(() => {
      setReviewFields(current);
    },[current]);
 
  return (
    <>
      <h2>Review details</h2>
      <h3>Review for {employeeName} | {employeeJobTitle} ({employeeEmail})</h3>
      {/* <textarea readOnly id="reviewBody" cols="30" rows="10" defaultValue={reviewBody} /><br /> */}
      {content}<br />
      <br />
      <small>Assigned to: {reviewerName} | {reviewerJobTitle} ({reviewerEmail})</small>
       
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: 'center' }}>
        <Button value="signout" onClick={closeMethod} sx={{ my: 2, ml: 2, display: 'flex' }} variant="contained">CLOSE</Button>
      </Box>
    </>
  )
}

export default ViewReview