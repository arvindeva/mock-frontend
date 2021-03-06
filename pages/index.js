import Head from 'next/head';
import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import {
  Box,
  Stack,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Spinner,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react';

import NavBar from '../components/NavBar';

const StyledHome = styled.div`
  .container {
    width: 1200px;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    ul {
      list-style: none;
      .sample-item {
        p {
          display: inline-block;
          color: blue;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState({});

  const fetchResult = async (title) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (title === 'nutcracker') {
      const response = {
        title: 'Nutcracker',
        tempo: 108,
        key: 'C Major',
      };
      setAnalysis(response);
    }
    if (title === 'fishin') {
      const response = {
        title: 'Fishin',
        tempo: 117,
        key: 'D minor',
      };
      setAnalysis(response);
    }
    if (title === 'sweetwaltz') {
      const response = {
        title: 'Sweet Waltz',
        tempo: 152,
        key: 'D Major',
      };
      setAnalysis(response);
    }
    setLoading(false);
  };

  return (
    <StyledHome>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Box className="container">
          <Stack spacing={10}>
            <Box>
              <Heading as="h1" size="4xl">
                Music Analyzer
              </Heading>
            </Box>
            <Box>
              Please choose sample files from librosa or upload your own song
              file (WIP)!
            </Box>
            <Box>
              <Heading mb={5}>Sample files</Heading>
              <ul>
                <li
                  className="sample-item"
                  onClick={() => fetchResult('nutcracker')}
                >
                  <p>Nutcracker</p>
                </li>
                <li
                  className="sample-item"
                  onClick={() => fetchResult('sweetwaltz')}
                >
                  <p>Sweet Waltz</p>
                </li>
                <li
                  className="sample-item"
                  onClick={() => fetchResult('fishin')}
                >
                  <p>Fishin</p>
                </li>
              </ul>
            </Box>
            <Box>
              <Heading mb={5}>Result</Heading>

              {!analysis.title && !loading && <p>Result will be shown here.</p>}
              {loading && (
                <div>
                  <Spinner />
                  <div>Analyzing song...</div>
                </div>
              )}
              {!loading && analysis.title && (
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={10}
                  w={800}
                  m="0 auto"
                >
                  <GridItem>
                    <Text>Title</Text>
                    <Text fontSize="3xl">
                      <b>{analysis.title}</b>
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text>Tempo</Text>
                    <Text fontSize="3xl">
                      <b>{Math.round(analysis.tempo)} BPM</b>
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text>Key</Text>
                    <Text fontSize="3xl">
                      <b>{analysis.key}</b>
                    </Text>
                  </GridItem>
                </Grid>
              )}
            </Box>
          </Stack>
        </Box>
      </main>

      <footer></footer>
    </StyledHome>
  );
};

export default Home;
