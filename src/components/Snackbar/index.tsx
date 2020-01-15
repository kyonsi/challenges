import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SnackbarStatus } from '../../reducers/app';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { closeSnackbar } from '../../actions/app';

export const Snackbar = () => {
  const COLOR = {
    success: '#55C618',
    error: '#ff0000'
  };

  const Wrapper = styled.div<{
    status: SnackbarStatus;
  }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    font-size: 12px;
    line-height: 20px;
    color: white;
    text-align: center;
    padding: 0;
    background-color: ${({ status }) => COLOR[status]};
  `;

  const Label = styled.p`
    font-size: 12px;
    color: white;
    text-align: center;
    position: relative;
  `;

  const snackbar = useTypedSelector((state) => state.app.ui.snackbar);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(closeSnackbar());
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch, snackbar]);
  if (!snackbar || !snackbar.show) return null;
  return (
    <Wrapper status={snackbar.status}>
      <Label>{snackbar.message}</Label>
    </Wrapper>
  );
};
