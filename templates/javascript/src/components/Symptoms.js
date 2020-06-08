import React from "react";

const Symptoms = () => {
  return (
    <React.Fragment>
      <div className="container p-4">
        <h1 className="display-4">COVID-19</h1>
        <p className="h5 mt-3 mb-3">
          Coronavirus disease (COVID-19) is an infectious respiratory disease,
          also known as 2019 Novel CoronaVirus or 2019-nCov. It was first
          identified in Wuhan, China in December 2019 and officially recognized
          as a pandemic by WHO (World Health Organization) on 11th March 2020.
        </p>
        <h1 className="display-4">Symptoms</h1>
        <p className="h5 mt-3 mb-3">
          Most of the cases face mild symptoms & these may appear 2-14 days
          after exposure. Watch for below known symptoms:
        </p>
        <div className="list mt-3 mb-3">
          <ul>
            <li className="lead">
              <mark>Dry Cough which starts with throat infection.</mark>
            </li>
            <br />
            <li className="lead">
              <mark>Difficulty in breathing.</mark>
            </li>
            <br />
            <li className="lead">
              <mark>Fever.</mark>
            </li>
            <br />
            <li className="lead">
              <mark>Pain or pressure in chest.</mark>
            </li>
            <br />
          </ul>
        </div>
        <p className="h5">What to do if you are seeing symptoms :</p>
        <div className="list mt-3 mb-3">
          <ul>
            <li className="lead">
              <mark>
                Seek medical attention & consult medical care immediately.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                Most of the people have mild symptoms & can be recovered at home
                if necessary precautions are taken.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                Please contact helpline (dial 104) in case of serious issues in
                order to get tested & for further care.
              </mark>
            </li>
          </ul>
        </div>
        <p className="h5">After you have been tested :</p>
        <div className="list mt-3 mb-3">
          <ul>
            <li className="lead">
              <mark>
                If you test +ve, follow medical advice & steps to prevent
                further spreading of this disease.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                If you test -ve, take necessary precautions as it is possible
                that you were in your early stages of illness & avoid increasing
                or spreading it further.
              </mark>
            </li>
          </ul>
        </div>
        <h1 className="display-4 mt-3 mb-3">Precautions</h1>
        <div className="list">
          <ul>
            <li className="lead">
              <mark>
                Wash your hands often using soap/ handwash & water for atleast
                20 seconds.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>Use sanitizer and rub all over your hands.</mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                Avoid touching face (mouth, eyes and nose) with unwashed hands.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                Stay indoors and Avoid close contact with sick people.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                Avoid close contact with people (Older then 60 years") &
                (younger then 10 years) of age as they are more vulnerable to
                the virus & may catch the infection easily.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                Cover your mouth while coughing & sneezing with tissue &
                wash/dispose it off immediately.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                Regularly clean & disinfect your furniture, door knobs, window
                handles, door bells, laptops, other electronic devices which are
                used frequently.
              </mark>
            </li>
            <br />
            <li className="lead">
              <mark>
                After receiving any courier/ parcel, ensure washing/ sanitizing
                your hands properly & wash the item if it is washable or else
                keep it untouched for a few hours.
              </mark>
            </li>
            <br />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Symptoms;
