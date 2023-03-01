import React from 'react';

import { Container } from 'react-bootstrap';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=86bd7a1d203b4c57bcff71e971e6283e&response_type=code&redirect_uri=http://127.0.0.1:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public%20ugc-image-upload';

export default function Login() {
  return (
    <Container>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
