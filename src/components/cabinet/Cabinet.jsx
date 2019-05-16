import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import './Cabinet.scss';

const Cabinet = ({ onLogout, isLogged, user }) => {
  const [redirect, setRedirect] = useState(false);
  const [musicList, setMusicList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [instrumentsList, setInstrumentsList] = useState([]);
  const [instrument, setInstrument] = useState(user.instrument);
  const [country, setCountry] = useState(user.country);
  const [prefered_style, setPreferedStyle] = useState(user.prefered_style);
  const [about, setAbout] = useState(user.about);
  const [avatar, setAvatar] = useState(user.avatar);

  const getMusicList = async () => {
    const response = await fetch('/api/music-list');
    const musicList = await response.json();
    setMusicList(musicList);
  }

  const getCountriesList = async () => {
    const response = await fetch('/api/countries-list');
    const countriesList = await response.json();
    setCountriesList(countriesList);
  }

  const getInstrumentsList = async () => {
    const response = await fetch('/api/instruments-list');
    const instrumentsList = await response.json();
    setInstrumentsList(instrumentsList);
  }

  const saveUserAdditionalHandler = async evt => {
    evt.preventDefault();

    const newUser = {
      id: user.id,
      avatar,
      about,
      instrument: instrumentsList.find(instrumentName => instrumentName.name === instrument).id,
      pref_music: musicList.find(musicStyle => musicStyle.name === prefered_style).id,
      country: countriesList.find(countryItem => countryItem.name === country).id
    };

    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    }

    const request = await fetch('/api/change-user-data', config);
    const response = await request.text();
    if (response === 'OK') {
      alert('You have changed your data!');
    }
  };

  useEffect(() => {
    getMusicList();
    getCountriesList();
    getInstrumentsList();
  }, []);

  return (
    <main className="page-content">
      <section className="user-cabinet">
        <div className="user-cabinet__wrapper">
        {
          redirect && <Redirect to="/" />
        }
        {
          isLogged ?
          <main className="page-content">
              <section className="cabinet">
                <div className="cabinet__wrapper">
                  <h2 className="cabinet__title">Cabinet</h2>
                  <form className="cabinet__form" onSubmit={saveUserAdditionalHandler}>
                    <label className="cabinet__field">
                      Link to avatar
                      <input type="text" value={avatar} onChange={evt => setAvatar(evt.target.value)}/>
                    </label>

                    <label className="cabinet__field">
                      Prefer music
                      <select name="prefer-music" id="prefer-music-field" onChange={evt => setPreferedStyle(evt.target.value)}>
                        {
                          musicList.map(musicStyle => (
                            <option value={musicStyle.name} key={musicStyle.id} selected={musicStyle.name === user.prefered_style}>
                              {musicStyle.name}
                            </option>
                          ))
                        }
                      </select>
                    </label>

                    <label className="cabinet__field">
                      Country
                      <select name="country" id="country-field" onChange={evt => setCountry(evt.target.value)}>
                        {
                          countriesList.map(country => (
                            <option value={country.name} key={country.id} selected={country.name === user.country}>
                              {country.name}
                            </option>
                          ))
                        }
                      </select>
                    </label>

                    <label className="cabinet__field">
                      Instrument
                      <select name="instrument" id="instrument-field" onChange={evt => setInstrument(evt.target.value)}>
                        {
                          instrumentsList.map(instrument => (
                            <option value={instrument.name} key={instrument.id} selected={instrument.name === user.instrument}>
                              {instrument.name}
                            </option>
                          ))
                        }
                      </select>
                    </label>

                    <label className="cabinet__field cabinet__field--about">
                      About me
                      <textarea name="about-me" id="about-me-field" cols="30" rows="10" defaultValue={about} onChange={evt => setAbout(evt.target.value)}></textarea>
                    </label>

                    <button type="submit" className="cabinet__save">Save changes</button>
                  </form>

                  <button className="cabinet__logout" onClick={() => {
                    onLogout();
                    setRedirect(true);
                  }}
                  >
                    Log out
                  </button>
                </div>
              </section>
            </main>
        : <h1 style={{textAlign: 'center'}}>You must login to go to this page</h1>
        }
        </div>
      </section>
    </main>
  )
}

export default Cabinet;
