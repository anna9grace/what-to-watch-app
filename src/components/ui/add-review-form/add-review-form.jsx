import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';

import { postComment } from '../../../store/api-actions';
import { setCommentIsSending } from '../../../store/action';
import { getCommentSendingStatus } from '../../../store/film-data/selectors';
import { MAX_RATING, ReviewLength } from '../../../const';

const ratingValues = new Array(MAX_RATING).fill().map((el, index) => index + 1).reverse();

function AddReviewForm(props) {
  const { filmId } = props;

  const history = useHistory();
  const dispatch = useDispatch();
  const isCommentSending = useSelector(getCommentSendingStatus);

  const [isValid, setIsValid] = useState(false);
  const [review, setReview] = useState({
    rating: null,
    comment: '',
  });
  const { comment, rating } = review;


  useEffect(() => setIsValid(
    rating && comment.trim().length > ReviewLength.MIN && comment.trim().length < ReviewLength.MAX,
  ), [comment, rating]);

  const onTextChange = (evt) => {
    setReview({
      ...review,
      comment: evt.target.value,
    });
  };

  const onRatingChange = (evt) => {
    setReview({
      ...review,
      rating: evt.target.value,
    });
  };

  const onCommentPostSuccess = () => {
    history.goBack();
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setCommentIsSending(true));
    dispatch(postComment(filmId, review, onCommentPostSuccess));
  };


  return (
    <div className="add-review" data-testid="add-review-form">
      <form
        action="#"
        className="add-review__form"
        onSubmit={onFormSubmit}
      >
        <div className="rating">
          <div className="rating__stars">

            {
              ratingValues.map((value) => (
                <React.Fragment key={value}>
                  <input
                    className="rating__input"
                    id={`star-${value}`}
                    type="radio"
                    name="rating"
                    value={`${value}`}
                    checked={value === +rating}
                    onChange={onRatingChange}
                    disabled={isCommentSending}
                    data-testid="rating-input"
                  />
                  <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
                </React.Fragment>
              ))
            }

          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={comment}
            onChange={onTextChange}
            disabled={isCommentSending}
            data-testid="review-textarea"
          />

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              disabled={isCommentSending || !isValid}
              type="submit"
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

AddReviewForm.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default AddReviewForm;
