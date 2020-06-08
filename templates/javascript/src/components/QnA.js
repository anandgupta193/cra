import React from "react";

const QnA = () => {
  return (
      <React.Fragment>
    <div className="container p-md-5">
    <p className="h1 mb-4 text-center">Q&A on coronaviruses (COVID-19)</p>
        <p className="h5">WHO is continuously monitoring and responding to this outbreak. This Q&A will be updated as more is known about COVID-19, how it spreads and how it is affecting people worldwide. For more information, check back regularly on WHO’s coronavirus pages. <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">Page</a></p>
      <div class="accordion" id="accordionExample">
        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">What is Coronavirus?</h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              Coronaviruses are a large family of viruses which may cause
              illness in animals or humans. In humans, several coronaviruses are
              known to cause respiratory infections ranging from the common cold
              to more severe diseases such as Middle East Respiratory Syndrome
              (MERS) and Severe Acute Respiratory Syndrome (SARS). The most
              recently discovered coronavirus causes coronavirus disease
              COVID-19.
            </div>
          </div>
        </div>
        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">What is COVID-19?</h5>
          </div>

          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              COVID-19 is the infectious disease caused by the most recently
              discovered coronavirus. This new virus and disease were unknown
              before the outbreak began in Wuhan, China, in December 2019.
            </div>
          </div>
        </div>

        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">What are the symptoms of COVID-19?</h5>
          </div>

          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              The most common symptoms of COVID-19 are fever, tiredness, and dry
              cough. Some patients may have aches and pains, nasal congestion,
              runny nose, sore throat or diarrhea. These symptoms are usually
              mild and begin gradually. Some people become infected but don’t
              develop any symptoms and don't feel unwell. Most people (about
              80%) recover from the disease without needing special treatment.
              Around 1 out of every 6 people who gets COVID-19 becomes seriously
              ill and develops difficulty breathing. Older people, and those
              with underlying medical problems like high blood pressure, heart
              problems or diabetes, are more likely to develop serious illness.
              People with fever, cough and difficulty breathing should seek
              medical attention.
            </div>
          </div>
        </div>

        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseFour"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">How does COVID-19 spread?</h5>
          </div>

          <div
            id="collapseFour"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              People can catch COVID-19 from others who have the virus. The
              disease can spread from person to person through small droplets
              from the nose or mouth which are spread when a person with
              COVID-19 coughs or exhales. These droplets land on objects and
              surfaces around the person. Other people then catch COVID-19 by
              touching these objects or surfaces, then touching their eyes, nose
              or mouth. People can also catch COVID-19 if they breathe in
              droplets from a person with COVID-19 who coughs out or exhales
              droplets. This is why it is important to stay more than 1 meter (3
              feet) away from a person who is sick. WHO is assessing ongoing
              research on the ways COVID-19 is spread and will continue to share
              updated findings.
            </div>
          </div>
        </div>

        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseFive"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">How likely am I to catch COVID-19?</h5>
          </div>

          <div
            id="collapseFive"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              The risk depends on where you are - and more specifically, whether
              there is a COVID-19 outbreak unfolding there. For most people in
              most locations the risk of catching COVID-19 is still low.
              However, there are now places around the world (cities or areas)
              where the disease is spreading. For people living in, or visiting,
              these areas the risk of catching COVID-19 is higher. Governments
              and health authorities are taking vigorous action every time a new
              case of COVID-19 is identified. Be sure to comply with any local
              restrictions on travel, movement or large gatherings. Cooperating
              with disease control efforts will reduce your risk of catching or
              spreading COVID-19. COVID-19 outbreaks can be contained and
              transmission stopped, as has been shown in China and some other
              countries. Unfortunately, new outbreaks can emerge rapidly. It’s
              important to be aware of the situation where you are or intend to
              go. WHO publishes daily updates on the COVID-19 situation
              worldwide. You can see these at
              https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/
            </div>
          </div>
        </div>

        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseSix"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">Should I worry about COVID-19?</h5>
          </div>

          <div
            id="collapseSix"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              llness due to COVID-19 infection is generally mild, especially for
              children and young adults. However, it can cause serious illness:
              about 1 in every 5 people who catch it need hospital care. It is
              therefore quite normal for people to worry about how the COVID-19
              outbreak will affect them and their loved ones. We can channel our
              concerns into actions to protect ourselves, our loved ones and our
              communities. First and foremost among these actions is regular and
              thorough hand-washing and good respiratory hygiene. Secondly, keep
              informed and follow the advice of the local health authorities
              including any restrictions put in place on travel, movement and
              gatherings. Learn more about how to protect yourself at
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">WHO</a>
            </div>
          </div>
        </div>

        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseSeven"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">Who is at risk of developing severe illness?</h5>
          </div>

          <div
            id="collapseSeven"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              While we are still learning about how COVID-2019 affects people,
              older persons and persons with pre-existing medical conditions
              (such as high blood pressure, heart disease, lung disease, cancer
              or diabetes) appear to develop serious illness more often than
              others.
            </div>
          </div>
        </div>

        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseEight"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              Are antibiotics effective in preventing or treating the COVID-19?
            </h5>
          </div>

          <div
            id="collapseEight"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              No. Antibiotics do not work against viruses, they only work on
              bacterial infections. COVID-19 is caused by a virus, so
              antibiotics do not work. Antibiotics should not be used as a means
              of prevention or treatment of COVID-19. They should only be used
              as directed by a physician to treat a bacterial infection.
            </div>
          </div>
        </div>

        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseNine"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              Are there any medicines or therapies that can prevent or cure
              COVID-19?
            </h5>
          </div>

          <div
            id="collapseNine"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              While some western, traditional or home remedies may provide
              comfort and alleviate symptoms of COVID-19, there is no evidence
              that current medicine can prevent or cure the disease. WHO does
              not recommend self-medication with any medicines, including
              antibiotics, as a prevention or cure for COVID-19. However, there
              are several ongoing clinical trials that include both western and
              traditional medicines. WHO will continue to provide updated
              information as soon as clinical findings are available.
            </div>
          </div>
        </div>
        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseTen"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">Can I catch COVID-19 from my pet?</h5>
          </div>

          <div
            id="collapseTen"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              While there has been one instance of a dog being infected in Hong
              Kong, to date, there is no evidence that a dog, cat or any pet can
              transmit COVID-19. COVID-19 is mainly spread through droplets
              produced when an infected person coughs, sneezes, or speaks. To
              protect yourself, clean your hands frequently and thoroughly. WHO
              continues to monitor the latest research on this and other
              COVID-19 topics and will update as new findings are available.
            </div>
          </div>
        </div>
        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseEleven"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              Can humans become infected with the COVID-19 from an animal
              source?
            </h5>
          </div>

          <div
            id="collapseEleven"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              Coronaviruses are a large family of viruses that are common in
              animals. Occasionally, people get infected with these viruses
              which may then spread to other people. For example, SARS-CoV was
              associated with civet cats and MERS-CoV is transmitted by
              dromedary camels. Possible animal sources of COVID-19 have not yet
              been confirmed. To protect yourself, such as when visiting live
              animal markets, avoid direct contact with animals and surfaces in
              contact with animals. Ensure good food safety practices at all
              times. Handle raw meat, milk or animal organs with care to avoid
              contamination of uncooked foods and avoid consuming raw or
              undercooked animal products.
            </div>
          </div>
        </div>
        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseTwelve"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">Should I wear a mask to protect myself?</h5>
          </div>

          <div
            id="collapseTwelve"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              Only wear a mask if you are ill with COVID-19 symptoms (especially
              coughing) or looking after someone who may have COVID-19.
              Disposable face mask can only be used once. If you are not ill or
              looking after someone who is ill then you are wasting a mask.
              There is a world-wide shortage of masks, so WHO urges people to
              use masks wisely. WHO advises rational use of medical masks to
              avoid unnecessary wastage of precious resources and mis-use of
              masks (see Advice on the use of masks). The most effective ways to
              protect yourself and others against COVID-19 are to frequently
              clean your hands, cover your cough with the bend of elbow or
              tissue and maintain a distance of at least 1 meter (3 feet) from
              people who are coughing or sneezing. See basic protective measures
              against the new coronavirus for more information.
            </div>
          </div>
        </div>
        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseThirteen"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              Is the source of the coronavirus causing COVID-19 known?
            </h5>
          </div>

          <div
            id="collapseThirteen"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              Currently, the source of SARS-CoV-2, the coronavirus (CoV) causing
              COVID-19 is unknown. All available evidence suggests that
              SARS-CoV-2 has a natural animal origin and is not a constructed
              virus. SARS-CoV-2 virus most probably has its ecological reservoir
              in bats. SARS-CoV-2, belongs to a group of genetically related
              viruses, which also include SARS-CoV and a number of other CoVs
              isolated from bats populations. MERS-CoV also belongs to this
              group, but is less closely related.
            </div>
          </div>
        </div>
        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseFourteen"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              How did the first human SARS-CoV-2 infections occur?
            </h5>
          </div>

          <div
            id="collapseFourteen"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              The first human cases of COVID-19 were identified in Wuhan City,
              China in December 2019. At this stage, it is not possible to
              determine precisely how humans in China were initially infected
              with SARS-CoV-2. However, SARS-CoV, the virus which caused the
              SARS outbreak in 2003, jumped from an animal reservoir (civet
              cats, a farmed wild animal) to humans and then spread between
              humans. In a similar way, it is thought that SARS-CoV-2 jumped the
              species barrier and initially infected humans, but more likely
              through an intermediate host, that is another animal species more
              likely to be handled by humans - this could be a domestic animal,
              a wild animal, or a domesticated wild animal and, as of yet, has
              not been identified. Until the source of this virus is identified
              and controlled, there is a risk of reintroduction of the virus in
              the human population and the risk of new outbreaks like the ones
              we are currently experiencing.
            </div>
          </div>
        </div>
        <div
          class="card"
          data-toggle="collapse"
          data-target="#collapseFifteen"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">Is COVID-19 airborne?</h5>
          </div>

          <div
            id="collapseFifteen"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body h6">
              The virus that causes COVID-19 is mainly transmitted through
              droplets generated when an infected person coughs, sneezes, or
              speaks. These droplets are too heavy to hang in the air. They
              quickly fall on floors or surfaces. You can be infected by
              breathing in the virus if you are within 1 metre of a person who
              has COVID-19, or by touching a contaminated surface and then
              touching your eyes, nose or mouth before washing your hands.
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};
export default QnA;
