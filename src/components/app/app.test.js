import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import {MAX_FILMS_COUNT, AuthorizationStatus, AppRoutes} from '../../const';
import App from './app';


let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authInfo: {
          'id': 1,
          'email': 'Oliver.conner@gmail.com',
          'name': 'Oliver.conner',
          'avatar_url': 'img/1.png',
          'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
        },
      },
      DATA: {
        isDataLoaded: true,
        isPromoDataLoaded: true,
        promoFilm: {
          backgroundColor: '#C6CADF',
          backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
          description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
          director: 'Jean-Jacques Annaud',
          genre: 'Adventure',
          id: 2,
          isFavorite: false,
          name: 'Seven Years in Tibet',
          posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
          previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
          previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
          rating: 3.6,
          released: 1997,
          runTime: 136,
          scoresCount: 112612,
          starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
          videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        },
        films: [
          {
            backgroundColor: '#C6CADF',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
            description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
            director: 'Jean-Jacques Annaud',
            genre: 'Adventure',
            id: 2,
            isFavorite: false,
            name: 'Seven Years in Tibet',
            posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
            previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            rating: 3.6,
            released: 1997,
            runTime: 136,
            scoresCount: 112612,
            starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
            videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
          },
          {
            backgroundColor: '#73B39A',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
            description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
            director: 'Nicolas Winding Refn',
            genre: 'Action',
            id: 3,
            isFavorite: false,
            name: 'Bronson',
            posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
            previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            rating: 3.6,
            released: 2008,
            runTime: 92,
            scoresCount: 109661,
            starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
            videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
          },
        ],
        renderedFilmsCount: MAX_FILMS_COUNT,
        filteredFilms: [
          {
            backgroundColor: '#C6CADF',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
            description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
            director: 'Jean-Jacques Annaud',
            genre: 'Adventure',
            id: 2,
            isFavorite: false,
            name: 'Seven Years in Tibet',
            posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
            previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            rating: 3.6,
            released: 1997,
            runTime: 136,
            scoresCount: 112612,
            starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
            videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
          },
          {
            backgroundColor: '#73B39A',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
            description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
            director: 'Nicolas Winding Refn',
            genre: 'Action',
            id: 3,
            isFavorite: false,
            name: 'Bronson',
            posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
            previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            rating: 3.6,
            released: 2008,
            runTime: 92,
            scoresCount: 109661,
            starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
            videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
          },
        ],
        favoriteFilms: [
          {
            backgroundColor: '#C6CADF',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
            description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
            director: 'Jean-Jacques Annaud',
            genre: 'Adventure',
            id: 2,
            isFavorite: false,
            name: 'Seven Years in Tibet',
            posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
            previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            rating: 3.6,
            released: 1997,
            runTime: 136,
            scoresCount: 112612,
            starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
            videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
          },
          {
            backgroundColor: '#73B39A',
            backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
            description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
            director: 'Nicolas Winding Refn',
            genre: 'Action',
            id: 3,
            isFavorite: false,
            name: 'Bronson',
            posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
            previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
            previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            rating: 3.6,
            released: 2008,
            runTime: 92,
            scoresCount: 109661,
            starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
            videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
          },
        ],
      },
      FILM: {
        currentFilm: {
          backgroundColor: '#73B39A',
          backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
          description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
          director: 'Nicolas Winding Refn',
          genre: 'Action',
          id: 3,
          isFavorite: false,
          name: 'Bronson',
          posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
          previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
          previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
          rating: 3.6,
          released: 2008,
          runTime: 92,
          scoresCount: 109661,
          starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
          videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
        },
        isFilmDataLoaded: true,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });


  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoutes.ROOT);
    render(fakeApp);

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });


  it('should render "MyListScreen" when user navigate to "/mylist"', () => {
    history.push(AppRoutes.MY_LIST);
    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });


  it('should render "FilmScreen" when user navigate to "/films/:id/"', () => {
    history.push(`${AppRoutes.FILM}/2`);
    render(fakeApp);

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });


  it('should render "AddReviewScreen" when user navigate to "/films/:id/review"', () => {
    history.push(`${AppRoutes.FILM}/2/review`);
    render(fakeApp);

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByTestId('user-block')).toBeInTheDocument();
    expect(screen.getByTestId('add-review-form')).toBeInTheDocument();
  });


  it('should render "PlayerScreen" when user navigate to "/films/:id/review"', () => {
    history.push(`${AppRoutes.PLAYER}/2`);
    render(fakeApp);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByTestId('player')).toBeInTheDocument();
  });


  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });

  it('should render "SignInScreen" when user navigate to "/login"', () => {
    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      },
      DATA: {
        isDataLoaded: true,
        isPromoDataLoaded: true,
      },
    });

    history.push(AppRoutes.SIGN_IN);

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });
});
