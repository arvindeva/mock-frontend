import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { Grid, HStack, GridItem } from '@chakra-ui/react';

const StyledNavBar = styled.div`
  background-color: #001158;
  height: 5rem;
  display: flex;
  align-items: center;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    padding: 1rem;
    margin: 0 auto;
    color: white;
    .left {
      display: flex;
      align-items: center;
      .title {
        font-size: 2rem;
      }
    }
    .middle {
      display: flex;
      align-items: center;
      .title {
        font-size: 2rem;
      }
    }
    .right {
      display: flex;
      align-items: center;
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <div className="content">
        <div className="left">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={180}
            height={100}
            s
          />
        </div>
        {/* <div className="middle">
          <Link href="/">
            <a>
              <h1 className="title">Music Analyzer</h1>
            </a>
          </Link>
        </div> */}
        <div className="right">
          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            <Link href="/">
              <a>
                <h1>Home</h1>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <h1>About</h1>
              </a>
            </Link>
          </Grid>
        </div>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
