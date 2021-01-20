import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  margin-top: 10px;
  width: 100% auto;
  height: 37.4rem;
  max-width: 35rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  border-radius: 1.5rem;
  margin: 0 auto;
  background-color: var(--color-white);
  box-shadow: 0 5rem 10rem -2rem rgba(8, 70, 94, 0.5);

  .basic-info {
    display: flex;
    margin-top: 1.9rem;
    align-items: center;
    margin-bottom: 0.8rem;
    justify-content: center;
  }

  &__name {
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: var(--color-dark-blue);
    font-weight: var(--weight-bold);
  }

  .email {
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 2.23rem;
    color: var(--color-gray-blue);
  }
`;

export const Avatar = styled.div`
  z-index: 1;
  border-radius: 50%50%;
  margin-top: 8.75rem;
  position: relative;
  align-items: center;
  display: inline-flex;

  img {
    width: 9.6rem;
    height: 9.6rem;
    border-radius: 50%;
    border: 0.5rem solid var(--color-white);
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardButton = styled.button`
  display: flex;
  width: 100% auto;
  padding: 10px 10px 10px 10px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
